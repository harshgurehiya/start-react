# Start React 🚀

# Parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement (Auto-refreshing the page)
- Uses File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compressing
- COnsistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# React Food

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- -RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Start Rating, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# Two types of Export/Import

- Default

export default Component;
import Component from "path";

- Named => used for multiple exports from single file

export const Component;
import {Component} from "path";
