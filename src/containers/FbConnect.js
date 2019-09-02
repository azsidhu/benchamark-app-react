import React from 'react';
import Header from '../components/Header';


function FbConnect({ history }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="container">
                <div className="col-sm-3 offset-sm-4" style={{ display: 'flex', flexDirection: 'row', marginBottom: 60, marginTop:60 }}>
                    <button type="submit" className="btn btn-primary btn-md" style={{ marginLeft: 10 }}>Facebook connect</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default FbConnect;