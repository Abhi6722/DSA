---
sidebar_position: 4
---

# Flutter Widgets

In Flutter, there are numerous widgets available, and the choice of which widgets to use in a particular screen depends on your app's functionality and design requirements. Here is a list of some commonly used and essential widgets in Flutter:

1. **Text**: Used to display text in your app.

```dart
Text("Hello World")
```

2. **Container**: A basic rectangular visual element that can contain other widgets.

```dart
Container(
  color: Colors.blue,
  width: 100,
  height: 100,
  child: // Another widget or content here
)
```

3. **Image**: Used to display images.

```dart
Image.asset("assets/image.png")
```

4. **ListView**: A scrollable list of widgets.

```dart
ListView(
  children: <Widget>[
    ListTile(title: Text('Item 1')),
    ListTile(title: Text('Item 2')),
    // Add more list items as needed
  ],
)
```

5. **Row and Column**: Used for arranging widgets in horizontal (Row) or vertical (Column) layouts.

```dart
Column(
  children: <Widget>[
    Text("Widget 1"),
    Text("Widget 2"),
    // Add more widgets vertically
  ],
)
```

6. **Button**: Widgets like `ElevatedButton` or `TextButton` for user interaction.

```dart
ElevatedButton(
  onPressed: () {
    // Add action here
  },
  child: Text("Click Me"),
)
```
```dart
MaterialButton(
  onPressed: () {
    // Add action here
  },
  child: Text("Click Me"),
)
```

7. **TextField**: Allows users to input text.

```dart
TextField(
  decoration: InputDecoration(labelText: 'Enter text'),
)
```

8. **Icon**: Displays icons.

```dart
Icon(Icons.star)
```

9. **Padding**: Adds space around a widget.

```dart
Padding(
  padding: const EdgeInsets.all(16.0),
  child: // Your widget here
)
```

10. **AppBar**: The app bar for your screen.

```dart
AppBar(
  title: Text("My App"),
)
```

11. **Drawer**: A side navigation menu.

```dart
Drawer(
  child: // Contents of the drawer menu
)
```

12. **Card**: Used to display information or content in a card-like format.

```dart
Card(
  child: // Card contents
)
```

13. **AlertDialog**: Used for showing dialogs or pop-up alerts.

```dart
AlertDialog(
  title: Text('Alert Title'),
  content: Text('Alert content goes here.'),
  actions: <Widget>[
    // Add buttons or actions here
  ],
)
```

These are just a few examples of commonly used Flutter widgets. Depending on your app's requirements, you can combine and customize these widgets to create complex and interactive user interfaces. Feel free to explore the Flutter documentation for more widgets and their properties: https://api.flutter.dev/flutter/widgets/widgets-library.html