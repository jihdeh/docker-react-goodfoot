import React, { PropTypes } from "react";
import IPropTypes from "react-immutable-proptypes";
import compose from "recompose/compose";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import withState from "recompose/withState";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import { Map} from "immutable";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import {
	postSignature
} from "../homepage-actions";

const mapDispatchToProps = (dispatch, props) => ({
	handleSubmit: (e) => {
		e.preventDefault();
		const {hash, sigKey} = props;
		let key = sigKey; //because using key as a prop
		//breaks in react
		dispatch(postSignature({hash, key}));
	}
});

const enhance = compose(
    setDisplayName("SignatureForm"),
    onlyUpdateForPropTypes,
    setPropTypes({
        response: IPropTypes.map,
        setHashValue: PropTypes.func,
        setKeyValue: PropTypes.func
    }),
    withState("sigKey", "setKeyValue", ""),
    withState("hash", "setHashValue", ""),
    connect(null, mapDispatchToProps)
);

const SignatureForm = enhance(({
    response = new Map(),
    handleSubmit,
    setKeyValue,
    setHashValue,

    sigKey,
    hash
}) => (
	<div>
		<form onSubmit={handleSubmit}>
			<Input placeholder="Enter Key" id="key" value={sigKey} onChange={evt => setKeyValue(evt.target.value)}/>
			<Input placeholder="Enter Hash" id="hash" value={hash} onChange={evt => setHashValue(evt.target.value)} />
			<Button type="primary" htmlType="submit">Log in</Button>
		</form>
	</div>
));


export default SignatureForm;
