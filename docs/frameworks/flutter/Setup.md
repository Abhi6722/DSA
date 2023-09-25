---
sidebar_position: 3
---

# Setup

For any application maintaining a proper structure code is very essential. Since we can't keep all the code in one place, we need to divide the code into different files to make it more structured and readable.

## **Intial Folder Structure**
```
[android]
[build]
[ios]
[lib]
    └── main.dart
[linux]
[macos]
[test]
[web]
[windows]
pubspec.lock
pubspec.yaml
.gitignore
.metadata
README.md
analysis_options.yaml
```

Now let's understand few of the important concepts that we need.

### Widgets

In Flutter, widgets are the basic building blocks of your user interface. Everything you see on the screen is a widget. Widgets can represent structural elements like buttons and containers, or they can be more complex, like entire screens or custom components.

### Screens

In Flutter, screens typically refer to individual views or pages within your app. Each screen is usually implemented as a widget tree, and it represents a distinct section or functionality of your application. For example, you might have a login screen, a profile screen, a settings screen, and so on. 

### Routes

In Flutter, routes are used for navigation between different screens or views within your app. You can define a set of named routes in your app and specify which screen or widget should be displayed when a particular route is navigated to. 

### Theme

The theme in Flutter refers to the visual and stylistic properties that define the overall look and feel of your app. You can define a theme for your app that includes settings for things like text fonts, colors, button styles, and more. Using a consistent theme throughout your app ensures a cohesive and polished user experience.

## Modified Project Structure
Now since we have learned these basic concepts lets try to divide our application into different files and make it clean.

```
[lib]
    ├── main.dart
    ├── routes.dart    
    ├── theme.dart
    ├── [screens]
        └── home_screen.dart
        └── about_screen.dart
    └── [widgets]
        └── my_custom_button.dart
```

### main.dart
``main.dart`` serves as the starting point of our application and we can simply write the starting code from where the application starts.

```dart title="lib/main.dart"
import 'package:flutter/material.dart';
import 'package:my_first_app/routes.dart';
import 'package:my_first_app/theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'My First Application',
      theme: myTheme,
      initialRoute: '/',
      routes: routes,
    );
  }
}
```

### routes.dart
In the ``routes.dart`` file we specify the routes of our application. Basiclly we will attach each page to a specific route.

```dart title="lib/routes.dart"
import 'package:flutter/material.dart';
import 'package:my_first_app/screens/home_screen.dart';

final Map<String, WidgetBuilder> routes = {
  '/': (BuildContext context) => const HomeScreen(),
  // We can add other screens similarly
  // '/about': (BuildContext context) => const AboutScreen(),
};
```

### theme.dart
In this theme page we can set the theme color to the desired value that we want in our app and from this single place we can then later on change the theme of our complete application.

```dart title="lib/theme.dart"
import 'package:flutter/material.dart';

final ThemeData myTheme = ThemeData(
  brightness: Brightness.light,
  primaryColor: const Color(0xff7A5548),
  primaryColorLight: const Color(0xffE3A282),
  primaryColorDark: const Color(0xffFFF4E6),
  canvasColor: const Color(0xfffafafa),
  scaffoldBackgroundColor: const Color(0xffF0F0F0),
  secondaryHeaderColor: const Color(0xfffdf4e7),
  dialogBackgroundColor: const Color(0xffffffff),
  indicatorColor: const Color(0xff7A5548),
  appBarTheme: const AppBarTheme(
    backgroundColor: Color(0xff7A5548),
  ),
);
```

### home_screen.dart
Inside the ``screens`` folder we will code for each of the screen in our application like the Home Screen, About Screen, etc.

```dart title="lib/screens/home_screen.dart"
import 'package:flutter/material.dart';
import 'package:my_first_app/widgets/my_custom_button.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("My First App"),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Hello World"),
            SizedBox(
              height: 10,
            ),
            MyCustomButton()
          ],
        ),
      ),
    );
  }
}
```

### my_custom_button.dart
Inside the widgets folder we can write all the widgets that our application will need and we can use anywhere.

```dart title="lib/widgets/my_custom_button.dart"
import 'package:flutter/material.dart';

class MyCustomButton extends StatelessWidget {
  const MyCustomButton({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: () {},
      color: Colors.brown,
      child: const Text(
        "Custom Button",
        style: TextStyle(
          color: Colors.white,
        ),
      ),
    );
  }
}
```

So after all these setup the apps look will not change significantly but now we have the ability to scale this application to a larger extend.

![After Structuring](https://i.pinimg.com/564x/00/de/7f/00de7f0de6de2710a643ed0bb4f3c920.jpg)

