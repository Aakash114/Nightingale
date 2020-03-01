function JSONData(){

    // Data Taken from Jan 1855 to Dec 1855
    var data = [
 {
   "Month": "Jan 1855",
   "Zymotic diseases": 2761,
   "Wounds & injuries": 83,
   "All other causes": 324
 },
 {
   "Month": "Feb 1855",
   "Zymotic diseases": 2120,
   "Wounds & injuries": 42,
   "All other causes": 361
 },
 {
   "Month": "Mar 1855",
   "Zymotic diseases": 1205,
   "Wounds & injuries": 32,
   "All other causes": 172
 },
 {
   "Month": "Apr 1855",
   "Zymotic diseases": 477,
   "Wounds & injuries": 48,
   "All other causes": 57
 },
 {
   "Month": "May 1855",
   "Zymotic diseases": 508,
   "Wounds & injuries": 49,
   "All other causes": 37
 },
 {
   "Month": "Jun 1855",
   "Zymotic diseases": 802,
   "Wounds & injuries": 209,
   "All other causes": 31
 },
 {
   "Month": "Jul 1855",
   "Zymotic diseases": 382,
   "Wounds & injuries": 134,
   "All other causes": 33
 },
 {
   "Month": "Aug 1855",
   "Zymotic diseases": 483,
   "Wounds & injuries": 164,
   "All other causes": 25
 },
 {
   "Month": "Sep 1855",
   "Zymotic diseases": 189,
   "Wounds & injuries": 276,
   "All other causes": 20
 },
 {
   "Month": "Oct 1855",
   "Zymotic diseases": 128,
   "Wounds & injuries": 53,
   "All other causes": 18
 },
 {
   "Month": "Nov 1855",
   "Zymotic diseases": 178,
   "Wounds & injuries": 33,
   "All other causes": 32
 },
 {
   "Month": "Dec 1855",
   "Zymotic diseases": 91,
   "Wounds & injuries": 18,
   "All other causes": 28
 }
];
    
    // This is standard code for all amcharts

    //Initilize the Amchart theme
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    //Set chart with HTML ID from index.html
    var chart = am4core.create("polarchart", am4charts.RadarChart);
    
    //Set Chart Data ====>>> Again Standard one available on the officical documentaion/website tutorials
    chart.data = data;
    chart.radius = am4core.percent(100);


    //Create Roses -  On the basis of Month
    var category = chart.xAxes.push(new am4charts.CategoryAxis());
    category.dataFields.category = "Month";
    category.renderer.labels.template.location = 0.5;
    category.renderer.tooltipLocation = 0.5;
    category.renderer.grid.template.disabled = true;
    category.alwaysShowTooltip = true;

    //Show Data values
    var value = chart.yAxes.push(new am4charts.ValueAxis());
    value.tooltip.disabled = true;
    value.renderer.labels.template.horizontalCenter = "left";
    value.renderer.grid.template.disabled = true;

    //Dividing Data into 3 catagories
    var deathseries1 = chart.series.push(new am4charts.RadarColumnSeries());
    deathseries1.name = "Zymotic diseases";
    deathseries1.dataFields.categoryX = "Month";
    deathseries1.dataFields.valueY = "Zymotic diseases";
    deathseries1.columns.template.strokeOpacity = 0.2;
    deathseries1.stacked = true;
    deathseries1.sequencedInterpolation = true;
    deathseries1.columns.template.width = am4core.percent(100);
    deathseries1.columns.template.tooltipText = "{Zymotic diseases}";
    deathseries1.fill = am4core.color("#c11500");


    //Category2
    var deathseries2 = chart.series.push(deathseries1.clone());
    deathseries2.name = "Wounds & injuries";
    deathseries2.dataFields.valueY = "Wounds & injuries";
    deathseries2.fill = am4core.color("#fbc02d");
     deathseries2.stroke = am4core.color("#fbc02d");

     //Category3
    var deathseries3 = chart.series.push(deathseries1.clone());
    deathseries3.name = "All other causes";
    deathseries3.fill = am4core.color("#2d68fb");
    deathseries3.dataFields.valueY = "All other causes";
    deathseries3.stroke = am4core.color("#2d68fb");

    chart.seriesContainer.zIndex = -1;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.exportable = false;
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.exportable = false;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.labels.template.text = "[bold]{name}[/]";

    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.xAxis = category;
    chart.cursor.fullWidthXLine = true;
    chart.cursor.lineX.strokeOpacity = 1;
    chart.cursor.lineX.fillOpacity = 0.1;
    chart.cursor.lineX.fill = am4core.color("#000000");


   
}