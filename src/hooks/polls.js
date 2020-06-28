import axios from 'axios';

// const apiBaseUrl = 'https://simplepollapi.jormaechea.com.ar';
const apiBaseUrl = 'http://192.168.0.31:4000';

const getPoll = async pollId => {
	const { status, data } = await axios.get(`${apiBaseUrl}/polls/${pollId}`, {
		timeout: 3000,
		headers: {
			Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InAwU3Nxbk5FeXdVX3BQVjJuSy01cCJ9.eyJpc3MiOiJodHRwczovL2pvcm1hZWNoZWEudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE3NTE5NDg2OTk0MjgxODc2Njg3IiwiYXVkIjpbImh0dHBzOi8vc2ltcGxlcG9sbC5qb3JtYWVjaGVhLmNvbS5hci8iLCJodHRwczovL2pvcm1hZWNoZWEudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU5MzI4Nzc4MSwiZXhwIjoxNTkzMzc0MTgxLCJhenAiOiJFV2xXS3UzYTBDMEFMeHVXQ2lVaHp4NlRkNTNRZ3QyMiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.F61elWfginbwpawy5q5tzMwf7Q22oPaD3ILbcaaq87GqL6bM10frQYqKONRGJ4rslJe7hzdAAFjhslcnIUqwmhJDNipDXQktTxbPUo5OvfevB5E11RbcDaLjDm41lIHO_OB9UCOmxMRiEF1mhZYki3xvFEDX4LrobYZK6QWAq9_Bniyc5mW5v47BD4VktvyC61vYnBOXqaJEKP8WmKuYGksOrBCQ4q6HuvVkBQzDc5y6TGHKyxF5Vhy0W60N50BDDUuXS6lopD-HSjHA1Ml9-qE437XlYAmmpgYWDnh3czVGJw7EF78Vb7HdPjw_zvPFjI02sD0QJtGbo5RzqGyK0Q'
		},
		responseType: 'json'
	});

	if(status !== 200)
		throw	new Error(`[${status}] ${data}`);

	return data;
};

const votePoll = async (pollId, vote, comment = '') => {
	const { status, data } = await axios.post(`${apiBaseUrl}/polls/${pollId}/vote`, {
		type: vote,
		comment
	},
	{
		timeout: 3000,
		headers: {
			Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InAwU3Nxbk5FeXdVX3BQVjJuSy01cCJ9.eyJpc3MiOiJodHRwczovL2pvcm1hZWNoZWEudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE3NTE5NDg2OTk0MjgxODc2Njg3IiwiYXVkIjpbImh0dHBzOi8vc2ltcGxlcG9sbC5qb3JtYWVjaGVhLmNvbS5hci8iLCJodHRwczovL2pvcm1hZWNoZWEudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU5MzI4Nzc4MSwiZXhwIjoxNTkzMzc0MTgxLCJhenAiOiJFV2xXS3UzYTBDMEFMeHVXQ2lVaHp4NlRkNTNRZ3QyMiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.F61elWfginbwpawy5q5tzMwf7Q22oPaD3ILbcaaq87GqL6bM10frQYqKONRGJ4rslJe7hzdAAFjhslcnIUqwmhJDNipDXQktTxbPUo5OvfevB5E11RbcDaLjDm41lIHO_OB9UCOmxMRiEF1mhZYki3xvFEDX4LrobYZK6QWAq9_Bniyc5mW5v47BD4VktvyC61vYnBOXqaJEKP8WmKuYGksOrBCQ4q6HuvVkBQzDc5y6TGHKyxF5Vhy0W60N50BDDUuXS6lopD-HSjHA1Ml9-qE437XlYAmmpgYWDnh3czVGJw7EF78Vb7HdPjw_zvPFjI02sD0QJtGbo5RzqGyK0Q'
		},
		responseType: 'json'
	});

	if(status !== 200)
		throw	new Error(`[${status}] ${data}`);

	return data;
};

export default {
	getPoll,
	votePoll
};
