/*global FB */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import C from "../../utils/constants";
import { setIsConnected, fetchFacebookProfile } from "./FacebookConnectActions";
import Header from "../../components/Header";

const FacebookConnect = ({ isConnected, jwt, setIsConnected, fetchFacebookProfile }) => {
  const checkPermissions = userAccessToken => {
    FB.api("/me/permissions", response => {
      let reRequest = false;
      for (const permission of response.data) {
        if (permission.status === C.FACEBOOK_PERMISSION_STATUS_DECLINED) {
          reRequest = true;
          break;
        }
      }
      if (reRequest) {
        console.log("Please provide required permissions.");
      } else {
        fetchFacebookProfile(userAccessToken, jwt)
        setIsConnected(true);
      }
    });
  };

  useEffect(() => {
    FB.getLoginStatus(response => {
      if (response.status === C.FACEBOOK_CONNECTED) {
        checkPermissions(response.authResponse.accessToken);
      } else {
        console.log("Please connect with facebook.");
      }
    });
  }, []);

  const handleClick = () => {
    if (isConnected) {
      FB.logout(response => {
        if (response.status === C.FACEBOOK_LOGGED_OUT) {
          setIsConnected(false);
        } else {
          console.log("Unable to disconnect with facebook.");
        }
      });
    } else {
      FB.login(
        response => {
          console.log(response)
          if (response.status === C.FACEBOOK_CONNECTED) {
            checkPermissions(response.authResponse.accessToken);
          } else {
            console.log("Unable to connect with facebook.");
          }
        },
        { scope: C.FACEBOOK_SCOPE.join(",") }
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="container">
          <div
            className="col-sm-3 offset-sm-4"
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 60,
              marginTop: 60
            }}
          >
            <button className="btn btn-primary" onClick={handleClick}>
              <span className="fab fa-facebook-square"></span>{" "}
              {isConnected ? "Disconnect" : "Connect"} with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isConnected: state.FacebookConnectReducer.isConnected,
    jwt: state.user.auth.access,
  };
};

const mapDispatchToProps = {
  setIsConnected, 
  fetchFacebookProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookConnect);
