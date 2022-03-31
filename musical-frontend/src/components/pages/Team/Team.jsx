import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';
import lupa from '../../../img/vector.png';

const Team = ({ loadTeamData, team, match }) => {
	useEffect(() => {
		loadTeamData(match.params.id);
	}, [match.params.id]);

	const [user, setUser] = useState();
	

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);


	const [searchValue, setSearchValue] = useState('');

	const favouritesPeoples = team.data && team.data.filter((item, index) => index % 2 === 0 && index < 20);


	const handleSearhChange = (evt) => {
		setSearchValue(evt.target.value);
	};

	const handleDeletePerson = async (evt) => {
		evt.preventDefault();
		const id = evt.target.getAttribute('data-id');

		const responseData = await axios
			.delete(`${API_URL}/team/${id}`, { withCredentials: true })
			.then((response) => response);

		if (responseData.status == 200) {
			location.reload();
		}
	};

	return (
		<Fragment>
			<Header />
			<div className="container">
				<h1 className="info__title">Композиторы Беларуси</h1>
				<div className="info__famous">
					{favouritesPeoples &&
						favouritesPeoples.map((person) => (
							<Link to={`/tasks/${person._id}`} key={person._id} className="a">
								<div className="info__card">
									<img className="card__img" src={`${API_URL}/getImage/${person.avatar}`} />
									<p className="card__name">{person.name}</p>
								</div>
							</Link>
						))}
				</div>
				<div className="info__con">
					<img className="search__icon" src={lupa} alt="" />
					<input className="info__search" type="text" placeholder="Поиск по персонам" onChange={handleSearhChange} />;
				</div>

				<div className="info__people">
					{team.data &&
						team.data
							.filter((item) => searchValue == '' || _.includes(item.name, searchValue))
							.map((person) => (
								<Link to={`/tasks/${person._id}`} key={person._id}>
									<div className="person">
										<img className="person__img" src={`${API_URL}/getImage/${person.avatar}`} />
										<p className="person__name">{person.name}</p>
										{user && user.isAdmin && (
											<div className="delete__person" data-id={person._id} onClick={handleDeletePerson}>
												&times;
											</div>
										)}
									</div>
								</Link>
							))}
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Team.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Team.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Team;
