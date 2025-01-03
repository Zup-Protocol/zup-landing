import 'package:flutter/material.dart';
import 'package:routefly/routefly.dart';
import 'package:url_strategy/url_strategy.dart';
import 'package:zup_landing/landing_theme.dart';
import 'package:zup_landing/routes.g.dart';

void main() {
  setPathUrlStrategy();
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      theme: LandingTheme.light,
      debugShowCheckedModeBanner: false,
      routerConfig: Routefly.routerConfig(
        routes: routes,
        initialPath: routePaths.path,
        routeBuilder: (context, settings, child) => PageRouteBuilder(
            pageBuilder: (_, __, ___) => child,
            settings: settings,
            transitionsBuilder: (_, a, ___, child) => FadeTransition(
                  opacity: a,
                  child: child,
                )),
      ),
    );
  }
}
