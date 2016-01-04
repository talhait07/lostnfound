import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const PureAuth = React.createClass({
    mixins: [PureRenderMixin],

    render: function () {
        return <div className="auth row">
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h4 className="panel-title">Welcome To</h4>
                        <img src="images/batman.png" alt="Insightpool"/>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <input id="login-username" type="text" className="form-control" name="_username"
                                           placeholder="Username"/>
                                    <span className="input-group-addon"><span
                                        className="glyphicon glyphicon-user"></span> </span>

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input id="login-password" type="password" className="form-control" name="_password"
                                           placeholder="Password"/>
                                    <span className="input-group-addon"><span
                                        className="glyphicon glyphicon-lock"></span> </span>

                                </div>
                            </div>


                            <div className="form-group">
                                <div className="col-md-12 controls">
                                    <button id="btn-login" type="submit" className="btn btn-success">Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
})

function mapStateToProps(stete) {
    return {}
}

export const Auth = connect(mapStateToProps)(PureAuth);