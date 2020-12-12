export const authenticate = (phoneNumber, password) => {
	fetch(process.env.REACT_APP_CHAP_CHAP_API_BASE_URL + "/authentication_token", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify({
			"phoneNumber": phoneNumber,
			"password": password
		})
	}).then(resp => {
		console.log(resp, "AAAAAAA")
		return resp.json()
	}).then(data => data)
}