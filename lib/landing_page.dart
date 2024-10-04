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
    return LayoutBuilder(builder: (context, constraints) {
      return Scaffold(
        body: Stack(
          fit: StackFit.expand,
          children: [
            Padding(
              padding: const EdgeInsets.all(40),
              child: Column(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      ConstrainedBox(
                        constraints: const BoxConstraints(maxWidth: 580),
                        child: ShaderMask(
                          shaderCallback: (bounds) => const LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [ZupColors.brand5, ZupColors.brand],
                          ).createShader(
                            Rect.fromLTWH(0, 0, bounds.width, bounds.height),
                          ),
                          blendMode: BlendMode.srcIn,
                          child: const Text(
                            "Your very first liquidity pool aggregator",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 60,
                            ),
                          ),
                        ),
                      ),
                      const Spacer(),
                      SizedOverflowBox(
                        size: const Size(270, 250),
                        child: ShaderMask(
                          shaderCallback: (bounds) => const LinearGradient(
                            colors: [
                              ZupColors.brand,
                              ZupColors.brand,
                              ZupColors.black
                            ],
                          ).createShader(
                            Rect.fromLTWH(0, 0, bounds.width, bounds.height),
                          ),
                          child: Assets.logos.zupTyped.svg(height: 400),
                        ),
                      )
                    ],
                  ),
                  const Spacer(),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Transform.translate(
                        offset: const Offset(0, 120),
                        child: Assets.logos.zupTyped.svg(
                          height: 400,
                          colorFilter: const ColorFilter.mode(
                            ZupColors.gray5,
                            BlendMode.srcIn,
                          ),
                        ),
                      ),
                      const Spacer(),
                      const SizedBox(
                        width: 300,
                        child: Text(
                          "Smart Liquidity Choices",
                          style: TextStyle(
                            color: ZupColors.gray5,
                            fontWeight: FontWeight.bold,
                            fontSize: 70,
                          ),
                        ),
                      )
                    ],
                  )
                ],
              ),
            ),
            Center(
              child: SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.only(top: 100),
                  child: Column(
                    children: [
                      Assets.logos.zup.svg(height: 250),
                      const SizedBox(height: 40),
                      ZupPrimaryButton(
                        title: "Waitlist",
                        onPressed: () {},
                        fixedIcon: true,
                        icon: Assets.icons.listClipboard.svg(),
                        width: 150,
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
                      const SizedBox(height: 20),
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
            ),
          ],
        ),
      );
    });
  }
}
