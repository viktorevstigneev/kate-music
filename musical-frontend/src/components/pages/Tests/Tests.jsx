import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Quiz from 'react-quiz-component';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const Tests = ({ loadTeamData, team, match }) => {
	const [user, setUser] = useState();
	console.log('user: ', user);

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const quiz_one = {
		quizTitle: 'Тест по музыке',
		nrOfQuestions: '10',
		questions: [
			{
				question: 'В зависимости от качества звучания:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Глухой или звонкий', 'Медленный или быстрый', 'Металлический или деревянный'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'На какие виды делятся музыкальные инструменты:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Струнные и духовые', 'Духовые и ударные', 'Струнные, ударные и духовые'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'В зависимости от лада музыка может быть:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Громкая тихая', 'Маршевая и песенная', 'Минорная и мажорная'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Какой музыкальный инструмент можно отнести к ударным и струнным?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Арфу', 'Фортепиано', 'ларнет'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Что такое аккомпанемент?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: [
					'Сопровождающая игра на музыкальном инструменте',
					'Произведение, в котором мелодия повторяется',
					'Разновидность оперы',
				],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Когда все голоса в хоре поют одинаковую мелодию, это называется:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Антифонное пение', 'Пение каноном', 'Пение в унисон'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Что такое «дискант»?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Высокий женский голос', 'Высокий мужской голос', 'Детский голос'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Сколько линеечек в нотном стане?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['5', '4', '7'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Музыкальный инструмент, ставший символом Беларуси?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Фортепиано', 'Баян', 'Гусли'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Произведение, в котором одна и та же мелодия поочередно (и в то же время одновременно) повторяется разными голосами, называется',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Иссон', 'Унисон', 'Канон'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
		],
	};

	const quiz_two = {
		quizTitle: 'Тест про композиторов',
		nrOfQuestions: '10',
		questions: [
			{
				question: 'Кто является основателем белоруской национальной школы композиторов?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Богатырев Анатолий Васильевич', 'Лученок Игорь Михайлович', 'Глебов Евгений Александрович'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Какому композитору отказали при поступлении в музыкальное училище из-за профнепригодности?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Тесакову Киму Дмитриевичу', 'Вангеру Генриху Матусовичу', 'Глебову Евгению Александровичу'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Его творчество охватывает широкий круг жанров, но наиболее известны его симфонические сочинения и балеты. Стиль композитора находится под влиянием Д. Д. Шостаковича и отчасти раннего И. Ф. Стравинского',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Глебов Евгений Александрович ', 'Поплавский Евгений Владимирович', 'Тесаков Ким Дмитриевич'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Из произведений этого композитора формируются репертуар для Вокально-инструментального ансамбля(ВИА), белорусского вокально-инструментального ансамбля «Сябры», ансамбля народной музыки «Бяседа». Кто этот композитор?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Захлевный Леонид Константинович', 'Лученок Игорь Михайлович', 'Ханок Эдуард Семенович'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Многие произведения этого композитора адресованы юношеской аудитории и широко используются в качестве педагогического репертуара. Он является автором ряда научных публикаций, методических работ, типовых учебных программ для музыкальных ВУЗов. Создал первое учебное пособие по композиции – «Основы композиции и импровизации». Назовите имя этого композитора',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Смольский Дмитрий Брониславович', 'Дорохин Владимир Васильевич', 'Поплавский Евгений Владимирович'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Какой композитор выступил в противостояние с общепринятым официозным стилем, господствующем в Беларуси, выступив с симфонией «Октофония» (1967) и камерной ораторией «Песни Хиросимы» на стихи японских поэтов, написанными в серийной технике?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Тесаков Ким Дмитриевич', 'Смольский Дмитрий Брониславович', 'Яськов Константин Евгеньевич '],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Назовите имя режиссер, автор сценариев, композитор, художник-мультипликатор, актер. Композитор, написал музыку более чем к 40 фильмам (документальные, игровые, мультипликационные).',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Волчек Игорь Викторович', 'Соколовский Нестор Федорович', 'Дорохин Владимир Васильевич'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Ключевой чертой авторской поэтики является творческий космополитизм, существование в едином для всего искусства эстетико-стилевом континууме, неделимом по хронологической, национальной, конфессиональной и какой-либо иной принадлежности. Среди основных его сочинений — три оперы, Месса в честь Святого Франциска Ассизского, оратория «Куранты».',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Глебов Евгений Александрович', 'Богатырев Анатолий Васильевич', 'Копытько Виктор Николаевич'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Будучи ярким представителем неоромантизма, у композитора был создан индивидуальный стиль, отмеченный поэтическим очарованием и одухотворённостью музыкальных образов. Особое место в творчестве занимает концерт «Троицкие фрески» для двух труб, струнных и ударных (1998), за который композитор был удостоен Специальной премии Президента Республики Беларусь.',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Копытько Виктор Николаевич', 'Оловников Владимир Владимирович', 'Горелова Галина Константиновна'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'За 70 лет творческой деятельности композитором написано много произведений разных жанров: оперы, симфонии, оратории, кантаты, концерты, многочисленные хоровые, камерно-вокальные и камерно-инструментальные композиции, музыка к драматическим спектаклям, радиопостановкам и кинофильмам, циклы романсов, обработки народных песен.',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Богатырев Анатолий Васильевич', 'Горелова Галина Константиновна', 'Дорохин Владимир Васильевич'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
		],
	};

	const quiz_three = {
		quizTitle: 'Тест угадай мелодию',
		nrOfQuestions: '10',
		questions: [
			{
				question: `<audio src=${`${API_URL}/getAudio/anatoliy-bogatyrev-val-s-iz-muzyki-k-drame-m-lermontova-mask.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: [' А.Богатырев', 'В.Грибоедов', 'Лученок Игорь Михайлович'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/eduard-hanok-samuray.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Лученок Игорь Михайлович', 'А.Богатырев', 'Э.Ханок'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/viktor-kopyt-ko-progulka.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Виктор Копыт', 'Э.Ханок', 'Оловников Владимир Владимирович'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/m-klimkovich-nestor-sokolovskiy-gimn-respubliki-belarus.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Виктор Копыт', 'Э.Ханок', 'Максим Климович'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/v-olovnikov--pesnya-o-brestskoy-kreposti.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Горелова Галина Константиновна', 'Оловников Владимир Владимирович', 'Копытько Виктор Николаевич'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/evgeniy-glebov--zolotaya-osen.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Глебов Евгений Александрович', 'Копытько Виктор Николаевич', 'Виктор Копыт'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/dmitriy-smol-skiy-molodaya-para.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Копытько Виктор Николаевич', 'Оловников Владимир Владимирович', 'Поплавский Евгений Владимирович'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/m-klimkovich-nestor-sokolovskiy-gimn-respubliki-belarus.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Оловников Владимир Владимирович', 'Лученок Игорь Михайлович', 'Максим Климович'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/anatoliy-bogatyrev-val-s-iz-muzyki-k-drame-m-lermontova-mask.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: [ 'В.Грибоедов', 'Лученок Игорь Михайлович', ' А.Богатырев'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/viktor-kopyt-ko-progulka.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: [ 'Э.Ханок', 'Виктор Копыт','Оловников Владимир Владимирович'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
		],
	};

	const renderCustomResultPageOne = (obj) => (
		<div>
			<p>Тест 1 завершен</p>
			<p>
				Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
			</p>
			<button
				className="admin__button"
				onClick={() => {
					location.reload();
				}}
			>
				Начать заново
			</button>
		</div>
	);

	const renderCustomResultPageTwo = (obj) => (
		<div>
			<p>Тест 2 завершен</p>
			<p>
				Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
			</p>
			<button
				className="admin__button"
				onClick={() => {
					location.reload();
				}}
			>
				Начать заново
			</button>
		</div>
	);

	const renderCustomResultPageThree = (obj) => (
		<div>
			<p>Тест 3 завершен</p>
			<p>
				Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
			</p>
			<button
				className="admin__button"
				onClick={() => {
					location.reload();
				}}
			>
				Начать заново
			</button>
		</div>
	);

	const setQuizResultFirst = async (obj) => {
		const body = {
			test_one: obj.numberOfCorrectAnswers >= user.test_one ? obj.numberOfCorrectAnswers : user.test_one,
			id: user._id,
		};

		await axios.patch(`${API_URL}/profile`, body);
	};

	const setQuizResultSecond = async (obj) => {
		const body = {
			test_two: obj.numberOfCorrectAnswers >= user.test_two ? obj.numberOfCorrectAnswers : user.test_two,
			id: user._id,
		};

		await axios.patch(`${API_URL}/profile`, body);
	};

	const setQuizResultThird = async (obj) => {
		const body = {
			test_three: obj.numberOfCorrectAnswers >= user.test_three ? obj.numberOfCorrectAnswers : user.test_three,
			id: user._id,
		};

		await axios.patch(`${API_URL}/profile`, body);
	};

	return (
		<Fragment>
			<Header />
			<div className="test">
				<h1 className="test__title">На этой странице можно проверить свои знания о Белоруских композиторах</h1>
				<Quiz
					quiz={quiz_one}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageOne}
					onComplete={setQuizResultFirst}
				/>
				<Quiz
					quiz={quiz_two}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageTwo}
					onComplete={setQuizResultSecond}
				/>
				<Quiz
					quiz={quiz_three}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageThree}
					onComplete={setQuizResultThird}
				/>
			</div>

			<Footer />
		</Fragment>
	);
};

Tests.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Tests.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Tests;
