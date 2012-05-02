module.exports = function() {
    this.session.mysess = 'this value is set by actions/session/set.js';
    this.redirect('./');
};
