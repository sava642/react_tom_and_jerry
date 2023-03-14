import React from 'react';
import Card from "../Card";
import { useState, useEffect } from "react";
import { Title, Container, Wrapper } from "./ContentEasyLevelPage.styled";
import { easyArray } from "../../arraysCards/arraysCards";
import Timer from "../Timer";
import Envelope from "../Envelope";
import ModalGameOver from "../ModalGameOver";


const ContentEasyLevelPage = () => {

	const [gameOver, setGameOver] = useState(false);
	const [timerEnded, setTimerEnded] = useState(false);
	const [modal, setModal] = useState(true);
	const [key, setKey] = useState(0);

	const handleClick = () => {
		setKey(key + 1);
	};

	useEffect(() => {
		setGameOver(false)
	}, [])

	const whoIsWin = (array) => {
		const allCards = array.every(card => card.opacity === 0)
		if (allCards) {
			setGameOver(true);
			setModal(false)
		}
	}

	return (
		<div key={key}>
			<Wrapper>
				<Container>
					{gameOver && <ModalGameOver
						setGameOver={setGameOver}
						setTimerEnded={setTimerEnded}
						gameOver={gameOver}
						handleClick={handleClick}
						setModal={setModal}
					/>}

					{timerEnded && modal && <ModalGameOver
						gameOver={gameOver}
						setTimerEnded={setTimerEnded}
						handleClick={handleClick}
						setGameOver={setGameOver}
						setModal={setModal}
					/>}
					<Card array={easyArray} whoIsWin={whoIsWin} />
				</Container>
				<Title>Таймер:</Title>
				<Envelope><Timer setTimerEnded={setTimerEnded} /> </Envelope >
			</Wrapper>
		</div>
	);
};

export default ContentEasyLevelPage;