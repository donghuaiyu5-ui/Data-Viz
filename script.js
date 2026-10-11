// 读取 MoMA 的作品文件。
async function loadData() {
    try {
        const response = await fetch('data/classifications.json');
        if (!response.ok) {
            throw new Error('Could not load the data file.');
        }
        const artworks = await response.json();
        const total = artworks.length;
        const counts = {};

        // 每看到一件作品，就给它所属的类别加 1。
        for (const artwork of artworks) {
            let category = artwork.Classification;
            if (!category || category === '(not assigned)') {
                category = 'Unknown';
            }
            category = category.trim();
            if (category === '') {
                category = 'Unknown';
            }
            if (counts[category] === undefined) {
                counts[category] = 0;
            }
            counts[category] = counts[category] + 1;
        }

        // 转成数组，再按数量从多到少排列。
        const categories = Object.entries(counts);
        categories.sort(function(a, b) {
            return b[1] - a[1];
        });

        document.getElementById('total').textContent = total.toLocaleString('en-US');
        document.getElementById('categories').textContent = categories.length;
        document.getElementById('largest').textContent = categories[0][0];
        document.getElementById('insight').textContent = categories[0][0] +
            ' is the largest classification, with ' +
            categories[0][1].toLocaleString('en-US') + ' records.';

        // 把所有类别放进页面下方的表格。
        const table = document.getElementById('data-table');
        for (const category of categories) {
            const row = table.insertRow();
            row.insertCell().textContent = category[0];
            row.insertCell().textContent = category[1].toLocaleString('en-US');
            row.insertCell().textContent = (category[1] / total * 100).toFixed(2) + '%';
        }

        // 图表只展示前 15 类，其余合并为 Other。
        const labels = [];
        const numbers = [];
        let otherCount = 0;
        for (let i = 0; i < categories.length; i++) {
            if (i < 15) {
                labels.push(categories[i][0]);
                numbers.push(categories[i][1]);
            } else {
                otherCount = otherCount + categories[i][1];
            }
        }
        if (categories.length > 15) {
            labels.push('Other');
            numbers.push(otherCount);
        }

        // 用 Chart.js 画横向柱状图。
        new Chart(document.getElementById('collection-chart'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Artwork records',
                    data: numbers,
                    backgroundColor: ['#FED46D', '#F6941D', '#F0662A', '#6A1A29', '#062375', '#070A3C'],
                    hoverBackgroundColor: '#070A3C',
                    barThickness: 26,
                    borderRadius: 2
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Number of artworks by classification'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const count = context.raw;
                                const percent = (count / total * 100).toFixed(2);
                                return count.toLocaleString('en-US') + ' records (' + percent + '%)';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {display: true, text: 'Number of artwork records'}
                    },
                    y: {
                        grid: {display: false},
                        ticks: {color: '#242721'}
                    }
                }
            }
        });
        document.getElementById('status').hidden = true;
    } catch (error) {
        document.getElementById('status').textContent =
            'Could not load the chart. Please use Live Server and check your internet connection.';
        console.error(error);
    }
}

loadData();
