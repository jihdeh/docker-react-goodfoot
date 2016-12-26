import React, {Component} from "react";
import frontPage from "../../decorators/frontpage";
import SignatureForm from "../components/signature-form";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	signature: state.get("signature")
});

@frontPage()
class HomeView extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		const {
			signature
		} = this.props;
		return (
			<div className="container">
				<SignatureForm signature={signature}/>
			</div>
		)
	}
}


export default connect(mapStateToProps)(HomeView);
