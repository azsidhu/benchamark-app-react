import React from 'react';
import Header from '../components/Header';
import '../styles/IgConnect.css';
import '../styles/Global.css';
import images from '../assets/images';


function IgConnect({ history }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="col-sm-3 offset-sm-4" style={{ display: 'flex', flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
                    <input type="text" className="form-control" id="inputIgUser" placeholder="Enter Insta username" />
                    <button type="submit" className="btn btn-primary btn-md" onClick={() => history.push('/igPageResults')} style={{ marginLeft: 10 }}>Crawl</button>
                </div>
                <div className="col-sm-3 offset-sm-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                    <h5>{' OR '}</h5>
                </div>
                <div className="col-sm-3 offset-sm-4" style={{ display: 'flex', flexDirection: 'row', marginBottom: 60 }}>
                    <button type="submit" className="btn btn-primary btn-md" onClick={() => history.push('/igconnected')} style={{ marginLeft: 10 }}>Connect to Instagram
                    <img src={images.instaLogo} width="30" height="30" className="d-inline-block align-top" alt="" style={{ marginLeft: 4 }} />
                    </button>
                </div>
                <div className="col-sm-9 offset-sm-1">
                    <div className="tableHeadContainer">
                        <h4>Previous crawl results</h4>
                        <div className="tableSearchContainer">
                            <label htmlFor="inputPassword">Search:</label>
                            <input type="text" className="form-control" id="inputSearchText"/>
                        </div>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Last Crawl</th>
                                <th scope="col">Username</th>
                                <th scope="col">Visit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>07:45 19-19</td>
                                <td>@otto</td>
                                <td className="detailsRow" onClick={() => history.push('/igPageResults')}>details</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagginationDiv">
                        <ul className="pagination">
                            <li className="page-item">
                                <p className="page-link" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </p>
                            </li>
                            <li className="page-item"><p className="page-link" >1</p></li>
                            <li className="page-item"><p className="page-link" >2</p></li>
                            <li className="page-item"><p className="page-link" >3</p></li>
                            <li className="page-item"><p className="page-link" >4</p></li>
                            <li className="page-item"><p className="page-link" >5</p></li>
                            <li className="page-item">
                                <p className="page-link" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default IgConnect;