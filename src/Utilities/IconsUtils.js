function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  export function weatherIcon(imageName) {
    const allWeatherIcons = importAll(
      require.context('../Assets/icons', false, /\.(png)$/)
    );
  
    const iconsKeys = Object.keys(allWeatherIcons);
  
    const iconsValues = Object.values(allWeatherIcons);
    const iconIndex = iconsKeys.indexOf(imageName);
  
    return iconsValues[iconIndex];
  }