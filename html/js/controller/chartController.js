app.controller("chartsCtrl", function ($scope) {
	$scope.chartList=[
		{ name:"Line",imgae:"",id:1,chartName:"line",type:"default" },
		{ name:"Area",imgae:"",id:2,chartName:"area",type:"default" },
		{ name:"Bar",imgae:"",id:3,chartName:"bar",type:"default" },
		{ name:"column",imgae:"",id:4,chartName:"column",type:"default" },
		{ name:"Pie",imgae:"",id:5,chartName:"pie",type:"pie" },
		{ name:"Packed bubble",imgae:"",id:6,chartName:"packedbubble",type:"packedbubble" }
	]
	$scope.chartSelection = function(id) {
		
		var selectedChart = $scope.chartList.filter(ele=>{
			return ele.id==id 
		})
		
		if(selectedChart.length>0){
			var selectedChart = selectedChart[0]
			if(selectedChart.type=="default"){
				drawDefaultST(selectedChart );
			}
			else if(selectedChart.type=="pie"){
				pieChartsST(selectedChart)
			}
			else if(selectedChart.type=="packedbubble"){
				packBubbleST(selectedChart)
			}
		}
		
	}
	// $scope.defaultCharts();
});