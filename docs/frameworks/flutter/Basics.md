---
sidebar_position: 2
---

# Basics

To get started with Flutter we need to first have flutter sdk installed on our computer. 

## Create a new project
To create a new project in Flutter we can simply write the following command in the terminal.

```shell
flutter create project_name
```
:::note
The naming convension that we use to name the flutter application is smaller case and words seperated with underscore like **my_first_app**
:::

In order to run your application, type:
```
cd my_first_app
flutter run
```

Your application code is in my_first_app/lib/main.dart.

```dart title="main.dart"
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a blue toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // TRY THIS: Try changing the color here to a specific color (to
        // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
        // change color while the other colors stay the same.
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          //
          // TRY THIS: Invoke "debug painting" (choose the "Toggle Debug Paint"
          // action in the IDE, or press "p" in the console), to see the
          // wireframe for each widget.
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
```

Now in order to run this application you can type the following command

```shell
flutter run
```

It will give you a list of devices to choose from

```shell
➜  my_first_app flutter run                
Connected devices:
macOS (desktop) • macos  • darwin-arm64   • macOS 14.0 23A5337a darwin-arm64
Chrome (web)    • chrome • web-javascript • Google Chrome 117.0.5938.92

No wireless devices were found.

[1]: macOS (macos)
[2]: Chrome (chrome)
Please choose one (or "q" to quit): 
```

You can choose any option. Since Flutter is a cross platform framework it can literally run on any device whether it be web, android, ios, windows, mac or even linux.

:::note
You can even install emulators or simulators and can run your app and even connect you physical device to run and test your applications.
:::

Choose the option you like and the app will start running.

![Flutter Counter Application](https://i.pinimg.com/564x/9a/b2/04/9ab20475b6f5ab0d8ff81b081c4b1ce0.jpg)

## Hello World

Let's start by creating a simple Hello World application in Flutter and remove the boilerplate code.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(child: Text('Hello World')),
    );
  }
}
```
![Flutter Hello World](https://i.pinimg.com/564x/04/9e/ac/049eac4dda0acded7a06cb9683175040.jpg)

Let's break this code down.
- The code snippet starts by importing the necessary packages and libraries. Here for each page we need to import the  ``material.dart`` library.
- The ``main function`` is the entry point of the application. It calls the runApp function to run the ``MyApp`` widget. Remember each piece of code in Flutter is widget.
- The MyApp class is a ``stateless widget`` that represents the entire application. It has a build method that returns a MaterialApp widget. We will learn more about ``stateless and stateful`` later on in the course. For now understand when the state of the application that means the ui is not changing we use stateless and when the ui changes and we need to show that change we use the stateful widget.
- The ``MaterialApp`` widget is the root of the Flutter application. It provides the title and theme for the app, and sets the MyHomePage widget as the home screen.
- The ``MyHomePage`` class is a stateless widget that represents the home screen of the app. It has a build method that returns a ``Scaffold`` widget. You can understand scaffold as a blank paper.
- The Scaffold widget provides a basic layout structure for the app. It has a body property that contains a ``Center widget``, which in turn contains a ``Text widget`` with the message ``"Hello World"``.