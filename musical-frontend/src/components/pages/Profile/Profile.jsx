import React, { useEffect, useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import ModalWindow from '../../common/ModalWindow';
import ProfileTaskList from '../../common/ProfileTasksList';
import './style.css';

import { POPUP_OVERLAY_CLASSNAME, API_URL } from '../../../constants';
import ProfileHonorsList from '../../common/ProfileHonorsList/ProfileHonorsList';

const Profile = ({ profile, honors, loadProfileData, loadHonorsData, match }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		loadProfileData(match.params.id);
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};

		getCurrentUser();
	}, [match.params.id]);



	return (
		<Fragment>
			<Header />
			<div className="profile">
				<p className="profile__top">Профиль пользоваеля {profile.data?.username}</p>
				<div className="profile__info">
					<div className="profile__test">Результат теста 1 : {profile.data?.test_one} из 10 </div>
					<div className="profile__test">Результат теста 2 : {profile.data?.test_two} из 10</div>
					<div className="profile__test">Результат теста 3 : {profile.data?.test_three} из 10</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Profile.propTypes = {
	profile: PropTypes.object,
	honors: PropTypes.object,
	loadProfileData: PropTypes.func,
	loadHonorsData: PropTypes.func,
	match: PropTypes.object,
};

Profile.defaultProps = {
	profile: {},
	honors: {},
	loadProfileData: () => {},
	loadHonorsData: () => {},
	match: {},
};

export default Profile;
