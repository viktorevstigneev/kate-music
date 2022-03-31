import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import lupa from '../../../img/vector.png';

import './style.css';

import { API_URL } from '../../../constants';

const Music = ({ loadTeamData, team, match }) => {
	const [searchValue, setSearchValue] = useState('');
	const [user, setUser] = useState();


	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const handleSearhChange = (evt) => {
		setSearchValue(evt.target.value);
	};

	const [music, setMusic] = useState();


	const getMusics = async () => {
		const responseData = await axios({
			method: 'GET',
			url: `${API_URL}/music`,
			withCredentials: true,
		});

		setMusic(responseData.data);
	};

	useEffect(() => {
		getMusics();
	}, []);

	const handleDeletePerson = async (evt) => {
		evt.preventDefault();
		const id = evt.target.getAttribute('data-id');

		const responseData = await axios
			.delete(`${API_URL}/music/${id}`, { withCredentials: true })
			.then((response) => response);

		if (responseData.status == 200) {
			location.reload();
		}
	};

	return (
		<Fragment>
			<Header />
			<div className="music_container">
				<h1 className="music__title">На этой странице вы можете найти музыкальные произведения композиторов</h1>
				<div className="info__con">
					<img className="search__icon" src={lupa} alt="" />
					<input className="info__search" type="text" placeholder="Поиск по персонам" onChange={handleSearhChange} />;
				</div>

				<div className="music">
					{music &&
						music
							.filter((item) => searchValue == '' || _.includes(item.name, searchValue))
							.map((item) => (
								<div className="music__block">
									<p className="music__name">{item.name}</p>
									{user && user.isAdmin && (
										<div className="delete__music" data-id={item._id} onClick={handleDeletePerson}>
											&times;
										</div>
									)}
									<audio src={`${API_URL}/getAudio/${item.stringPath}`} type="audio/mp3" controls="controls">
										fghfr
									</audio>
								</div>
							))}
				</div>
			</div>

			<Footer />
		</Fragment>
	);
};

Music.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Music.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Music;
