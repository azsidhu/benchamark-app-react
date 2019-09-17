import React, { useEffect } from "react";
import { connect } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import { ToastsStore } from "react-toasts";
import FacebookLogin from "react-facebook-login";
import C from "../../utils/constants";
import {
  setIsConnected,
  checkIsConnected,
  fetchFacebookProfile,
  loadFacebookPages
} from "./FacebookConnectActions";
import FacebookPages from "../FacebookPages/FacebookPages";
import Header from "../../components/Header";

const FacebookConnect = ({
  isConnected,
  jwt,
  setIsConnected,
  checkIsConnected,
  fetchFacebookProfile,
  loadFacebookPages
}) => {
  const checkPermissions = response => {
    let reRequest = false;
    const grantedScopes = response.grantedScopes.split(",");
    // eslint-disable-next-line no-unused-vars
    for (const permission of C.FACEBOOK_SCOPES) {
      if (grantedScopes.indexOf(permission) === -1) {
        reRequest = true;
        break;
      }
    }
    if (reRequest) {
      ToastsStore.error("Please provide required permissions.");
    } else {
      fetchFacebookProfile(response.accessToken, jwt);
    }
  };

  useEffect(() => {
    checkIsConnected(jwt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResponse = response => {
    if (response.status === C.FACEBOOK_STATUS_UNKNOW) {
      ToastsStore.error("Unable to connect with Facebook.");
    } else {
      checkPermissions(response);
    }
  };

  const handleLoadFacebookPagesClick = () => {
    loadFacebookPages(jwt);
  };

  let button = isConnected ? (
    <React.Fragment>
      <button className="btn btn-primary mb-3">
        <span className="fab fa-facebook-square fa-lg"></span> Connected with
        Facebook
      </button>
      <br />
      <button
        className="btn btn-primary"
        onClick={handleLoadFacebookPagesClick}
      >
        Load Pages
      </button>
    </React.Fragment>
  ) : (
    <FacebookLogin
      appId={C.APP_ID}
      textButton=" Connect with Facebook"
      scope={C.FACEBOOK_SCOPES.join(",")}
      returnScopes
      cssClass="btn btn-primary"
      icon="fab fa-facebook-square fa-lg"
      callback={handleResponse}
    />
  );

  return (
    <div>
      <Header />
      <div className="container">
        <div className="text-center mt-3">{button}</div>
        <FacebookPages />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isConnected: state.FacebookConnectReducer.isConnected,
    jwt: state.user.auth.access
  };
};

const mapDispatchToProps = {
  setIsConnected,
  checkIsConnected,
  fetchFacebookProfile,
  loadFacebookPages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookConnect);
