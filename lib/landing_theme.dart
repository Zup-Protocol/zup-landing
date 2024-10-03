import 'package:flutter/material.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class LandingTheme {
  static ThemeData get light => ThemeData(
        textSelectionTheme: const TextSelectionThemeData(
          selectionColor: ZupColors.brand5,
        ),
        scaffoldBackgroundColor: ZupColors.white,
        fontFamily: "SF Pro Rounded",
        primaryColor: ZupColors.brand,
      );
}
