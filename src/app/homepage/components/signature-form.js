import React, { PropTypes } from "react";
import IPropTypes from "react-immutable-proptypes";
import compose from "recompose/compose";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import withState from "recompose/withState";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import { Map, toJS} from "immutable";
import { Input, Button, Timeline } from "antd";
import { connect } from "react-redux";
import {
	postSignature
} from "../homepage-actions";

const mapDispatchToProps = (dispatch, props) => ({
	handleSubmit: (e) => {
		e.preventDefault();
		dispatch(postSignature(props));
	}
});

const enhance = compose(
    setDisplayName("SignatureForm"),
    onlyUpdateForPropTypes,
    setPropTypes({
        response: IPropTypes.map,
        setHashValue: PropTypes.func,
        setKeyValue: PropTypes.func,
        signature: IPropTypes.map
    }),
    withState("sigKey", "setKeyValue", ""),
    withState("hash", "setHashValue", ""),
    connect(null, mapDispatchToProps)
);

const SignatureForm = enhance(({
    handleSubmit,
    setKeyValue,
    setHashValue,

    sigKey,
    hash,
    signature = new Map()
}) => {
	const response = Object.assign({}, signature.toJS());
	return (
		<div className="signatureForm">
			<form onSubmit={handleSubmit}>
				<Input placeholder="Enter Key" id="key" value={sigKey} onChange={evt => setKeyValue(evt.target.value)}/>
				<Input placeholder="Enter Hash" id="hash" value={hash} onChange={evt => setHashValue(evt.target.value)} />
				<Button type="primary" htmlType="submit" id="submit">Log in</Button>
			</form>
			<br />
			<h3>Response:</h3>
			{response.signatureResponse &&
				<div className="statusCode">
					<Timeline>
						<Timeline.Item>StatusCode: {response.signatureResponse.status}</Timeline.Item>
						<Timeline.Item>Message: {response.signatureResponse.data}</Timeline.Item>
					</Timeline>
					<p id="response">{response.signatureResponse.status}</p>
				</div>
			}
		</div>
	)
});


export default SignatureForm;
