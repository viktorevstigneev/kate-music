import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const AdminPanel = ({ loadTeamData, team, match }) => {
	useEffect(() => {
		loadTeamData(match.params.id);
	}, [match.params.id]);

	const [file, setFile] = useState('');

	return (
		<Fragment>
			<Header />
			<h1 className="admin__title">Страница администратора</h1>
			<form
				className="admin__person"
				encType="multipart/form-data"
				method="POST"
				onSubmit={async (evt) => {
					evt.preventDefault();
					location.reload();
					const formData = new FormData(evt.target);

					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/team`,
						data: formData,
						withCredentials: true,
					});
				
				}}
			>
				<div className="admin__block">
					<label className="admin__label" htmlFor="avatar">
						<img
							className="admin__avatar"
							src={file ? URL.createObjectURL(file) : `${API_URL}/getImage/default.png`}
							alt="person picture"
						/>
						<div className="admin__icon">&#128194;</div>
					</label>
					<input
						className="admin__input"
						id="avatar"
						name="avatar"
						type="file"
						onChange={(evt) => setFile(evt.target.files[0])}
					/>
				</div>

				<div className="admin__right">
					<input className="admin__text-input" type="text" placeholder="введите полное имя композитора" name="name" />
					<textarea
						className="admin__textarea"
						id="description"
						name="description"
						type="text"
						placeholder="введите информацию о композиторе"
					/>
					{/* <input type="radio" name="isMostFanous" placeholder="fanickoe"/> */}
					<button className="admin__button" type="submit">
						добавить композитора
					</button>
				</div>
			</form>
			<form
				className="admin__person"
				encType="multipart/form-data"
				method="POST"
				onSubmit={async (evt) => {
					evt.preventDefault();
					
					const formData = new FormData(evt.target);

			

					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/music`,
						data: formData,
						withCredentials: true,
					});
				
					if(responseData.status == 200) {
						location.reload();
					}
				}}
			>
				<input className="admin__text-input" type="text" placeholder="введите имя" name="name" />
				<input type="file" name="sound" className="admin__file"/>
				<button className="admin__btn" type="submit">добавить музыку</button>
			</form>

			<Footer />
		</Fragment>
	);
};

AdminPanel.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

AdminPanel.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default AdminPanel;
