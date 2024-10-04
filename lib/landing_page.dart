import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zup_landing/gen/assets.gen.dart';
import 'package:zup_ui_kit/buttons/buttons.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});

  final double horizontalScreenPadding = 20;
  bool isMobile(BoxConstraints constraints) => constraints.maxWidth < 600;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          background(),
          CustomScrollView(
            slivers: [
              SliverFillRemaining(
                hasScrollBody: false,
                fillOverscroll: false,
                child: Center(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Assets.logos.zup.svg(height: 250),
                      const SizedBox(height: 50),
                      ZupPrimaryButton(
                        title: "Waitlist",
                        onPressed: () {},
                        fixedIcon: true,
                        width: 150,
                        padding: EdgeInsets.zero,
                        icon: Assets.icons.listClipboard.svg(),
                      ),
                      const SizedBox(height: 10),
                      ZupPrimaryButton(
                        title: "Docs",
                        hoverElevation: 0,
                        border: const BorderSide(color: ZupColors.brand),
                        backgroundColor: Colors.transparent,
                        foregroundColor: ZupColors.brand,
                        onPressed: () {},
                        fixedIcon: true,
                        icon: Assets.icons.textPage.svg(),
                        width: 150,
                      ),
                      const SizedBox(height: 10),
                      ZupIconButton(
                        // backgroundColor: Colors.transparent,
                        borderSide: const BorderSide(color: ZupColors.brand),
                        padding: const EdgeInsets.all(12),
                        iconColor: ZupColors.black,
                        icon: Assets.logos.x.svg(
                          height: 22,
                        ),
                        onPressed: () => launchUrl(
                          Uri.parse(
                            "https://x.com/zup_protocol",
                          ),
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget background() => LayoutBuilder(builder: (context, constraints) {
        final screenWidth = constraints.maxWidth;

        return Stack(
          children: [
            Positioned(
              left: screenWidth * 0.02,
              top: screenWidth * 0.02,
              child: ShaderMask(
                shaderCallback: (bounds) => const LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [ZupColors.brand5, ZupColors.brand],
                ).createShader(
                  Rect.fromLTWH(0, 0, bounds.width, bounds.height),
                ),
                blendMode: BlendMode.srcIn,
                child: Text(
                  "Your very first\nliquidity pool\naggregator",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: (screenWidth * 0.05).clamp(0, 60),
                  ),
                ),
              ),
            ),
            Positioned(
              right: -(screenWidth * 0.1),
              top: -(screenWidth * 0.02),
              child: ShaderMask(
                shaderCallback: (bounds) => const LinearGradient(
                  colors: [ZupColors.brand, ZupColors.brand, ZupColors.black],
                ).createShader(
                  Rect.fromLTWH(0, 0, bounds.width, bounds.height),
                ),
                child: Assets.logos.zupTyped.svg(
                  height: (screenWidth * 0.2).clamp(0, 400),
                ),
              ),
            ),
            Positioned(
              left: -(screenWidth * 0.1),
              bottom: -(screenWidth * 0.02),
              child: Assets.logos.zupTyped.svg(
                height: (screenWidth * 0.3).clamp(0, 400),
                colorFilter: const ColorFilter.mode(
                  ZupColors.gray5,
                  BlendMode.srcIn,
                ),
              ),
            ),
            Positioned(
              right: screenWidth * 0.02,
              bottom: screenWidth * 0.02,
              child: Text(
                "Smart\nLiquidity\nChoices",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: ZupColors.gray5,
                  fontSize: (screenWidth * 0.05).clamp(0, 60),
                ),
              ),
            ),
          ],
        );
      });
}
