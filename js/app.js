$(function() {

	var body = $('body')
	compH = $( window ).height();
	var model = {
		currentQuestion: null,
		questions: [
			{
				img: 'img/beet.jpeg',
				text: 'ihjrnyvbuk',
				title: "Lá maior"
			},
			{
				img: 'img/nidere.png',
				text: 'Ja assistiu Stranger Things?',
				title: "nidere"
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
								<img id="Qimg" src="${model.questions[num].img}" title="${model.questions[num].title}">
							</div>
							<div id="answer">
								<input id="Q${num+1}" type="text" name="" placeholder="Resposta">
								<button id="btn" >Enviar</button>
							</div>
							<img id="1" class="transition-img" src=img/cellPog.png>
						</main>`;
			return question;
		},
		shuffle: function shuffle(array) {
	    let currentIndex = array.length, temporaryValue, randomIndex;
	    while (currentIndex !== 0) {
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
		    };
		    return array;
		},
		transitionPog: function() {
			$('#answer').css('opacity', '0')
			$('#info').css('opacity', '0')
			$('#1').css('opacity', '1').css('transform', 'scale(2)')

			setTimeout(function() {
				$('#1').css('transform', 'scale(0)')
			}, 800)

			var container = `<div class="container"></div`;

			body.append(container)
		},
		isCorrect: function(answer, num) {
			var question = $(`#Q${num}`)
			body = $('body')
			var container = '<div class="container"></div>'
			if (question.attr('id') == "Q1") {
				if (answer == "#212121") {
					controller.transitionPog()
					setTimeout(function() {
						controller.clearScreen(body)
						body.append(container)
						view2.init()
					}, 1500)
				} else {
						alert('NÃO (talvez a grafia)')
					}
			}

			if (question.attr('id') == "Q2" ) {
				if (answer == "É REAL" || answer == "É REAL" || answer == "É real" || answer == "é real") {
					controller.transitionPog()
					setTimeout(function() {
						controller.clearScreen(body)
						body.append(container)
						view3.init()
					}, 1500)
				} else {
						alert('NÃO (talvez a grafia)')
					}
			}

			if (question.attr('id') == "Q3") {
				if (answer == "5Head" || answer == "5head") {
					controller.transitionPog()
					setTimeout(function() {
						controller.clearScreen(body)
						body.append(container)
						view4.init()
					}, 1500)
				} else {
						alert('NÃO (talvez a grafia)')
					}
			}

		},
		audioPlayer: function() {
			var info = $('#info')
			var img = $('#Qimg')
			img.remove()
			var player = `<audio controls="controls">
							<source src="${model.questions[2].src}" type="audio/wav">
							</audio>`

			info.append(player)
		},
		getFinal: function() {
			return `<div class="container">
						<img id="pepeEnd" src=${model.imgFinal}>
						<p>Então né... aquela parte do sub, que talvez tenha te motivado, meio que... era mentira. Erá só pra te incentivar. Não foi por mal. Mas, só pra constar, eu também sou plebe <img src="img/pepeHands.png" width="28" height="28">. Eu espero que você, ao menos, tenha se entretido <img src="img/okayChamp.png" width="28" height="28">.</p>
					</div>`
		},
		question1Link: function() {
			console.log('-> Cor <-')
			body = $('body')
			var footer = $('footer')
			var link = `<a class="secret-link" target="_blank"
					href="https://developers.google.com/web/tools/chrome-devtools/console/?hl=pt-br">Click</a>`
			body.append(link)
			setTimeout(function() {
				var span = `<span>Tab?</span>`
				footer.text('Marco Rezende 2019 Tab?')
			}, 60000)
		},
		removeImg: function() {
			$('#Qimg').remove()
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