import React from 'react';
import Header from '../components/Header';
import '../styles/IgConnect.css';


function IgConnected({ history }) {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="col-sm-6 offset-sm-3" style={{marginTop:5}}><p>You account has been connected and data crawled successfully</p></div>
                <div className="col-sm-3 offset-sm-4" style={{display:'flex', flexDirection:'row',marginBottom:80}}>
                    <button type="submit" className="btn btn-primary btn-md" onClick={()=>history.push('/igconnect')} style={{marginLeft:10}}>Crawl again</button>
                </div>
                <div className="col-sm-9 offset-sm-1">
                <h4 style={{marginLeft:5}}>Recent crawl results</h4>
                    <table className="table" style={{ backgroundColor: '#fff' }}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Crawl time</th>
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
                            <tr>
                                <th scope="row">2</th>
                                <td>03:35 19-19</td>
                                <td>@photo_cc</td>
                                <td className="detailsRow" onClick={() => history.push('/igPageResults')}>details</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>07:45 19-19</td>
                                <td>@otto</td>
                                <td className="detailsRow" onClick={() => history.push('/igPageResults')}>details</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>10:30 19-20</td>
                                <td>@dawn.com</td>
                                <td className="detailsRow" onClick={() => history.push('/igPageResults')}>details</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>07:45 19-19</td>
                                <td>@otto</td>
                                <td className="detailsRow" onClick={() => history.push('/igPageResults')}>details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default IgConnected;