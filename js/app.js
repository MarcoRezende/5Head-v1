$(function() {

	var model = {
		currentQuestion: null,
		questions: [
			{
				img: '',
				text: 'QkFDS0dST1VORA==',
				showTab: function() {
					setTimeout(function() {

					}, 180000)
				}
			},
			{
				img: 'img/nidere.png',
				text: 'Ja assistiu Stranger Things?'
			},
			{
				src: 'audio/audio.wav',
				text: 'Twitch'
			}
		],
		imgFinal: 'img/feelsbadman.png'
	}

	var controller = {
		clearScreen: function(element) {
			element.empty();
		},
		getQuestion: function(num) {
			var question = `<main class="main">
							<div id="info">
								<span id="question">${model.questions[num].text}</span>
								<img src="${model.questions[num].img}">
							</div>
							<div>
								<input id="Q${num+1}" type="text" name="" placeholder="Resposta">
								<button id="btn" >Enviar</button>
							</div>
						</main>`;
			return question;
		},
		isCorrect: function(answer, num) {
			var question = $(`#Q${num}`)
			var body = $('body')
			var container = '<div class="container"></div>'
			if (question.attr('id') == "Q1") {
				if (answer == "#212121") {
					controller.clearScreen(body)
					body.append(container)
					view2.init()
				} else {
						alert('NÃO (talvez a grafia)')
					}
			}

			if (question.attr('id') == "Q2" ) {
				if (answer == "É REAL") {
					controller.clearScreen(body)
					body.append(container)
					view3.init()
				} else {
						alert('NÃO (talvez a grafia)')
					}
			}

			if (question.attr('id') == "Q3") {
				if (answer == "5Head") {
					controller.clearScreen(body)
					body.append(container)
					view4.init()
				} else {
						alert('NÃO (talvez a grafia)')
					}
			}

		},
		audioPlayer: function() {
			var info = $('#info')
			var img = $('img')
			img.remove()
			var player = `<audio controls="controls">
							<source src="${model.questions[2].src}" type="audio/wav">
							</audio>`

			info.append(player)
		},
		getFinal: function() {
			return `<div class="container">
						<img src=${model.imgFinal}>
						<p>Foi mal cara, mas... eu não tenho um sub pra você. Na verdade eu não tenho nem pra mim.
						Era só pra te motivar. Espero que você tenha gostado :)</p>
					</div>`
		},
		question1Link: function() {
			console.log('cor')
			var body = $('body')
			var footer = $('footer')
			var link = `<a class="secret-link" target="_blank"
					href="https://developers.google.com/web/tools/chrome-devtools/console/?hl=pt-br">Click</a>`
			body.append(link)
			setTimeout(function() {
				var span = `<span>Tab?</span>`
				footer.text('Marco Rezende 2019 Tab?')
			}, 60000)
		},
		init: function() {
			view1.init();
		}

	}

	var view1 = {
		init: function() {
			var container = $('.container')
			var buttonStart = $('#start')
			$(buttonStart).click(function() {
				controller.clearScreen(container)
				view1.render()
			})
		},
		render: function() {
			var container = $('.container')
			var htmlStr = controller.getQuestion(0);
			container.append(htmlStr)

			controller.question1Link()


			var btn = $('#btn')
			$(btn).click(function() {
				var inputText1 = $('#Q1')
				controller.isCorrect(inputText1.val(), 1);
			})
		}
	}

	var view2 = {
		init: function() {
			view2.render()
		},
		render: function() {
			var container = $('.container')
			var htmlStr = controller.getQuestion(1);
			container.append(htmlStr)


			var btn = $('#btn')
			$(btn).click(function() {
				var inputText1 = $('#Q2')
				controller.isCorrect(inputText1.val(), 2);
			})
		}
	}

	var view3 = {
		init: function() {
			view3.render()
		},
		render: function() {
			var container = $('.container')
			var htmlStr = controller.getQuestion(2);
			container.append(htmlStr)
			controller.audioPlayer()



			var btn = $('#btn')
			$(btn).click(function() {
				var inputText1 = $('#Q3')
				controller.isCorrect(inputText1.val(), 3);
			})
		}
	}

	var view4 = {
		init: function() {
			view4.render()
		},
		render: function() {
			var container = $('.container')
			var htmlStr = controller.getFinal();
			container.append(htmlStr)



		}
	}

	controller.init();
}())