import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import Brand from '../../assets/brand.PNG';
import { auth } from './../../firebase/utils';

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Brand} alt="Joca logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>LogOut</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  currentUser: null,
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, null)(Header);
