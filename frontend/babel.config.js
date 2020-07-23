
module.exports = function (api) {

    api.cache(true);

    const presets = [ "@babel/preset-env","@babel/react" ];

    const plugins = [ "@babel/plugin-transform-react-jsx","@babel/plugin-proposal-class-properties","babel-plugin-css-modules-transform" ];

    return {

        presets,

        plugins

    };

}
