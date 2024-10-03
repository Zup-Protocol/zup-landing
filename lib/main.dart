import 'package:flutter/material.dart';
import 'package:zup_landing/landing_page.dart';
import 'package:zup_landing/landing_theme.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: LandingTheme.light,
      debugShowCheckedModeBanner: false,
      home: const LandingPage(),
    );
  }
}
