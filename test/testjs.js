//this would be the object shape for storing the questions
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "Кто стал чемпионом Формулы-1 в 2017 году?",
        optionA: "Левис Хамелтон",
        optionB: "Себастьян Веттел",
        optionC: "Дон Жуан Пари",
        optionD: "Валтерри Боттас",
        correctOption: "optionA"
    },

    {
        question: "Кто стал чемпионом Формулы-1 в 2013 году?",
        optionA: "Левис Хамелтон",
        optionB: "Себастьян Веттел",
        optionC: "Валтерри Боттас",
        optionD: "Даниил Квиат",
        correctOption: "optionB"
    },

    {
        question: "Сколько секунд длилось самый быстрый пит-стоп в формуле 1?",
        optionA: "2.1",
        optionB: "2.41",
        optionC: "1.89",
        optionD: "1.92",
        correctOption: "optionD"
    },

    {
        question: "Где проходила самая первая гонка NASCAR Strictly Stock race?",
        optionA: "Трасса Талладега",
        optionB: "Спидвей Дейтона",
        optionC: "Шарлотт Спидвей",
        optionD: "В пригороде Сан Ларена",
        correctOption: "optionC"
    },

    {
        question: "Какая из следующих трасс была первой полностью асфальтированной трассой в расписании NASCAR?",
        optionA: "Спидвей Дейтона",
        optionB: "Шарлотт Спидвей",
        optionC: "Трасса Талладега",
        optionD: "Гоночная трасса Дарлингтон",
        correctOption: "optionD"
    },

    {
        question: "Какой из следующих треков известен как в NASCAR Кирпичный завод?",
        optionA: "Трасса Индианаполиса",
        optionB: "Трасса Дарлингтон",
        optionC: "Скоростная трасса Лоу",
        optionD: "Трасса Дарлингтон",
        correctOption: "optionA"
    },

    {
        question: "Какой из следующих треков завершает сезон NASCAR?",
        optionA: "Гоночная трасса Индианаполиса",
        optionB: "Трасса Талладега",
        optionC: "Спидвей Дейтона",
        optionD: "Скоростная трасса Лоу",
        correctOption: "optionC"
    },

    {
        question: "Когда была первая гонка Ф1?",
        optionA: "1950",
        optionB: "1940",
        optionC: "1935",
        optionD: "1920",
        correctOption: "optionA"
    },

    {
        question: "Гран-при какой страны обычно открывает сезон Формулы-1?",
        optionA: "Малайзия",
        optionB: "Китай",
        optionC: "Бельгия",
        optionD: "Австралия",
        correctOption: "optionD"
    },

    {
        question: "Какая из этих команд-конструкторов чаще побеждала в Кубке конструкторов Формулы-1?",
        optionA: "Mercedes",
        optionB: "Renault",
        optionC: "BMW",
        optionD: "Ferrari",
        correctOption: "optionD"
    },

    {
        question: "Кто стал лучшим гонщиком Ф1 Монако?",
        optionA: "Валтерри Ботас",
        optionB: "Кими Райконен",
        optionC: "Себастьян Феттель",
        optionD: "Стюи Ту Кей",
        correctOption: "optionC"
    },

    {
        question: "Назовите двух гонщиков, выигрывавших Гран При России?",
        optionA: "Льюис Х. и Нико Р.",
        optionB: "Себастьян Ф. и Кими Р.",
        optionC: "Дональт С. и Конор Макгрегор",
        optionD: "таких нет",
        correctOption: "optionA"
    },


    {
        question: "Cколько кругов насчитывает дистанция Гран-при России?",
        optionA: "38",
        optionB: "53",
        optionC: "52",
        optionD: "81",
        correctOption: "optionB"
    },

    {
        question: "Какой чемпионат приехал на «Сочи Автодром» первым?",
        optionA: "WTCC",
        optionB: "DTM",
        optionC: "Formula Renault",
        optionD: "РСКГ",
        correctOption: "optionD"
    },

    {
        question: "Сколько в среднем пилот теряет в весе во время Гран При?",
        optionA: "2кг",
        optionB: "10кг",
        optionC: "5кг",
        optionD: "7кг",
        correctOption: "optionA"
    },

    {
        question: "Какая средняя температура в кабине пилота Ф1?",
        optionA: "20 С",
        optionB: "90 С",
        optionC: "50 С",
        optionD: "70 С",
        correctOption: "optionC"
    },

    {
        question: "Громкость звука болида, проезжающего мимо трибуны, достигает:",
        optionA: "110dB",
        optionB: "120dB",
        optionC: "200dB",
        optionD: "50dB",
        correctOption: "optionA"
    },

    {
        question: "Сколько нынешних гонщиков выступали за Торо Россо?",
        optionA: "5",
        optionB: "4",
        optionC: "6",
        optionD: "7",
        correctOption: "optionC"
    },

    {
        question: "А когда в последний раз команда из Гроу выиграла гонку?",
        optionA: "2015",
        optionB: "2003",
        optionC: "2007",
        optionD: "2012",
        correctOption: "optionD"
    },

    {
        question: "На скольких трассах Ф1 в сезоне 2018 движение происходит против часово стрелки?",
        optionA: "6",
        optionB: "4",
        optionC: "7",
        optionD: "5",
        correctOption: "optionA"
    },

    {
        question: "Какая из этих команд ни разу не побеждала в гонках?",
        optionA: "Renault",
        optionB: "Toro Rosso",
        optionC: "Ferrari",
        optionD: "Sauber",
        correctOption: "optionD"
    },

    {
        question: "Как называется участник соревнований Формула-1?",
        optionA: "Водитель",
        optionB: "Пилот",
        optionC: "Лётчик",
        optionD: "Гонщик",
        correctOption: "optionB"
    },

    {
        question: "Какое из этих слов — фамилия известного автогонщика «Формулы-1»?",
        optionA: "Каравелла",
        optionB: "Физикелла",
        optionC: "Тарантелла",
        optionD: "Капелла",
        correctOption: "optionB"
    },

    {
        question: "Может ли пилот «Формулы-1» финишировать бегом?",
        optionA: "Дисквалификация",
        optionB: "Не может",
        optionC: "Может",
        optionD: "Да, но минута штрафа",
        correctOption: "optionC"
    },

    {
        question: "Какова максимальная продолжительность пит-стопа, установленная регламентом?",
        optionA: "5 минут",
        optionB: "30 минут",
        optionC: "Не ограничено",
        optionD: "1 минута",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Плохой результат, стоит подучить"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Средний результат, неплохо."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Отлично"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
