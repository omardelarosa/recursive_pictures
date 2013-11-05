var app = {

	initialize: function(){
		app.width = document.width
		app.height = document.height
		app.colors = ["#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47","#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47"];
		app.stage = new Kinetic.Stage({
			container: "main_container",
			width: app.width,
			height: app.height
		})
		app.layer = new Kinetic.Layer();
		app.make.squares(app.width,app.height,20)
	},

	make: {
		circles: function(){

		},
		squares: function(width,height,step){
			
			if (width < step || height < step) {
				app.stage.add(app.layer)
			} else {
				var box1 = new Kinetic.Rect({
					x: 0,
					y: 0,
					width: width,
					height: height,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)]
				})
				app.layer.add(box1)

				var box2 = new Kinetic.Rect({
					x: 0,
					y: app.height/2,
					width: width,
					height: height,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)]
				})
				app.layer.add(box2)

				var box3 = new Kinetic.Rect({
					x: app.width/2,
					y: 0,
					width: width,
					height: height,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)]
				})
				app.layer.add(box3)

				var box4 = new Kinetic.Rect({
					x: app.width/2,
					y: app.height/2,
					width: width,
					height: height,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)]
				})
				app.layer.add(box4)

				return app.make.squares(width-step,height-step,step)

			}
			
		}
	}

}

$(function(){
	app.initialize()
})