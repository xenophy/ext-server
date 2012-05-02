module.exports = function() {
    delete this.session.mysess;
    this.redirect('./');
};
