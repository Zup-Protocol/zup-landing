import 'package:flutter/material.dart';
import 'package:routefly/routefly.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zup_landing/gen/assets.gen.dart';
import 'package:zup_landing/routes.g.dart';
import 'package:zup_ui_kit/buttons/buttons.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class AppPage extends StatefulWidget {
  const AppPage({super.key});

  @override
  State<AppPage> createState() => _AppPageState();
}

class _AppPageState extends State<AppPage> {
  final double horizontalScreenPadding = 20;

  bool isMobile(BoxConstraints constraints) => constraints.maxWidth < 600;
  bool isHoveringX = false;
  bool isHoveringTelegram = false;

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
                        title: "Mint Genesis NFT",
                        border: const BorderSide(color: ZupColors.brand),
                        backgroundColor: ZupColors.brand,
                        foregroundColor: ZupColors.white,
                        onPressed: () => Routefly.navigate(routePaths.mint),
                        padding: EdgeInsets.zero,
                        fixedIcon: true,
                        icon: Assets.logos.zup.svg(height: 20),
                        width: 200,
                      ),
                      const SizedBox(height: 10),
                      ZupPrimaryButton(
                        title: "Waitlist",
                        onPressed: () => launchUrl(
                          Uri.parse("https://waitlist.zupprotocol.xyz"),
                        ),
                        fixedIcon: true,
                        hoverElevation: 0,
                        border: const BorderSide(color: ZupColors.brand),
                        width: 200,
                        backgroundColor: Colors.transparent,
                        foregroundColor: ZupColors.brand,
                        padding: EdgeInsets.zero,
                        icon: Assets.icons.listClipboard.svg(),
                      ),
                      const SizedBox(height: 10),
                      ZupPrimaryButton(
                        title: "Docs",
                        hoverElevation: 0,
                        border: const BorderSide(color: ZupColors.brand),
                        backgroundColor: ZupColors.white,
                        foregroundColor: ZupColors.brand,
                        onPressed: () => launchUrl(
                          Uri.parse(
                              "https://zupprotocol.notion.site/Zup-Documentation-1155a07f86f68059a5e2f2c1cfdf9be2?pvs=4"),
                        ),
                        padding: EdgeInsets.zero,
                        fixedIcon: true,
                        icon: Assets.icons.textPage.svg(),
                        width: 200,
                      ),
                      const SizedBox(height: 24),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          MouseRegion(
                            cursor: SystemMouseCursors.click,
                            onEnter: (event) => setState(
                              () => isHoveringX = true,
                            ),
                            onExit: (event) => setState(
                              () => isHoveringX = false,
                            ),
                            child: GestureDetector(
                              child: Assets.logos.x.svg(
                                height: 34,
                                colorFilter: ColorFilter.mode(
                                  ZupColors.gray4,
                                  isHoveringX ? BlendMode.dst : BlendMode.srcIn,
                                ),
                              ),
                              onTap: () => launchUrl(
                                Uri.parse("https://x.com/zup_protocol"),
                              ),
                            ),
                          ),
                          const SizedBox(width: 24),
                          MouseRegion(
                            cursor: SystemMouseCursors.click,
                            onEnter: (event) => setState(
                              () => isHoveringTelegram = true,
                            ),
                            onExit: (event) => setState(
                              () => isHoveringTelegram = false,
                            ),
                            child: GestureDetector(
                              child: Assets.logos.telegram.svg(
                                height: 34,
                                colorFilter: ColorFilter.mode(
                                  ZupColors.gray4,
                                  isHoveringTelegram
                                      ? BlendMode.dst
                                      : BlendMode.srcIn,
                                ),
                              ),
                              onTap: () => launchUrl(
                                Uri.parse("https://t.me/zupprotocol"),
                              ),
                            ),
                          ),
                        ],
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
              child: Text(
                "Your very first\nliquidity pool\naggregator",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: ZupColors.brand,
                  fontSize: (screenWidth * 0.05).clamp(30, 65),
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
                  height: (screenWidth * 0.2).clamp(80, 350),
                ),
              ),
            ),
            Positioned(
              left: 0,
              bottom: 0,
              child: Assets.logos.zupTyped.svg(
                height: (screenWidth * 0.2).clamp(80, 350),
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
                  fontSize: (screenWidth * 0.05).clamp(30, 65),
                ),
              ),
            ),
          ],
        );
      });
}
