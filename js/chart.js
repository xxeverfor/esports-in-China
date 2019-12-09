var myChart=echarts.init(document.getElementById("myBarChart"));
var option = {title: {
    text: '2010年-2017年中国游戏用户规模（单位：亿人）'
},
xAxis: {
    type: 'category',
    data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
},
yAxis: {
    type: 'value'
},
series: [{
    data: [2,3.3,4.1,5,5.2,5.3,5.7,5.8],
    type: 'line',
    smooth: true
}]
};

myChart.setOption(option);

var myChart1=echarts.init(document.getElementById("myBarChart1"));
var option1 = {title: {
    text: '2010年-2017年中国电子竞技用户规模（单位：亿人）'
},
xAxis: {
    type: 'category',
    data: [ '2015', '2016', '2017','2018']
},
yAxis: {
    type: 'value'
},
series: [{
    data: [1,1.2,2.5,3.1],
    type: 'line',
    smooth: true
}]
};

myChart1.setOption(option1);

var myChart2=echarts.init(document.getElementById("myBarChart2"));
var option2 = { title: {
        text: '求职人员意向比例图'
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['俱乐部', '赛事执行公司', '直播平台', '电竞游戏开发商', '媒体', '游戏厂商电竞业务部门', '数据公司', '内容制作公司', '教育培训机构', '其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'比例',
            type:'bar',
            barWidth: '60%',
            data:[58, 49, 34, 26, 25, 24, 16,16,10,2]
        }
    ]
};

myChart2.setOption(option2);

var myChart3=echarts.init(document.getElementById("myBarChart3"));
var option3 =  {title: {
    text: '2014-2018中国游戏直播用户数（单位：亿人）'
},
xAxis: {
    type: 'category',
    data: ['2014', '2015', '2016', '2017', '2018']
},
yAxis: {
    type: 'value'
},
series: [{
    data: [0.3,0.5,1,1.5,1.9],
    type: 'line',
    smooth: true
}]
};


myChart3.setOption(option3);

var myChart4=echarts.init(document.getElementById("myBarChart4"));
var option4 = {
    title: {
        text: '（中国电子竞技市场变化单位：亿人）'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['电子竞技用户规模','游戏用户规模']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2010','2011','2012','2013','2014','2015','2016','2017']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'游戏用户规模',
            type:'line',
            stack: ' ',
            data:[ , , , ,1,1.2,2.5,3.1]
        },
        {
            name:'电子竞技用户规模',
            type:'line',
            stack: '总量',
            data:[2,3.3,4.1,5,5.2,5.3,5.7,5.8]
        }
        
    ]
};



myChart4.setOption(option4);

window.onresize=function(){
    myChart.resize();
    myChart1.resize();
    myChart2.resize();
};

