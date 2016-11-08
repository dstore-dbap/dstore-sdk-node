var grpc = require('grpc');

function DstoreCredentials(username, password, accessToken) {
    this.username = username;
    this.password = password;
    this.accessToken = accessToken.length > 0 ? accessToken : "default";
}

DstoreCredentials.prototype.getMetadataUpdater = function () {
    var username = this.username;
    var password = this.password;
    var accessToken = this.accessToken;

    return function (service_url, callback) {
        var metadata = new grpc.Metadata();
        metadata.set('username', username);
        metadata.set('password', password);
        metadata.set('accesstoken', accessToken);
        callback(null, metadata);
    }
};

exports.DstoreCredentials = DstoreCredentials;