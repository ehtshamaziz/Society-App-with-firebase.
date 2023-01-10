// const { getDefaultConfig } = require('expo/metro-config');
// module.exports = getDefaultConfig(__dirname);
// defaultConfig.resolver.assetExts.push("cjs");

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();

// const { getDefaultConfig } = require("expo/metro-config");
// const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.transformer = {
//   babelTransformerPath: require.resolve("react-native-svg-transformer"),
// };

// defaultConfig.resolver = {
//   ...defaultConfig.resolver,
//   assetExts: [...defaultConfig.resolver.assetExts, "cjs"],
//   sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
// };

// module.exports = defaultConfig;
