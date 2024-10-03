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
      return SelectionArea(
        child: Scaffold(
          body: CustomScrollView(
            slivers: [
              const SliverPadding(
                padding: EdgeInsets.only(top: 40),
                sliver: SliverToBoxAdapter(
                  child: Text(
                    "Your very first liquidity pool aggregator",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: ZupColors.brand,
                    ),
                  ),
                ),
              ),
              SliverFillRemaining(
                hasScrollBody: false,
                child: Stack(
                  alignment: Alignment.topCenter,
                  children: [
                    Padding(
                      padding: EdgeInsets.symmetric(
                              horizontal: horizontalScreenPadding)
                          .copyWith(top: 40),
                      child: Assets.logos.zupTyped.svg(height: 500),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 70),
                      child: Assets.logos.zup.svg(height: 350),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: horizontalScreenPadding,
                      ).copyWith(bottom: 130),
                      child: Align(
                        alignment: Alignment.bottomCenter,
                        child: ZupPrimaryButton(
                          title: "Whitelist",
                          onPressed: () {},
                          width: isMobile(constraints) ? double.infinity : 200,
                          height: 60,
                          padding: EdgeInsets.zero,
                          fixedIcon: true,
                          icon: Assets.icons.listClipboard.svg(),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: horizontalScreenPadding,
                      ).copyWith(bottom: 60),
                      child: Align(
                        alignment: Alignment.bottomCenter,
                        child: ZupPrimaryButton(
                          width: isMobile(constraints) ? double.infinity : 200,
                          height: 60,
                          title: "Whitepaper",
                          padding: const EdgeInsets.all(0),
                          onPressed: () => launchUrl(
                            Uri.parse(
                                "https://zupprotocol.notion.site/Zup-Whitepaper-Business-1135a07f86f6809f94b3dbe1192a338d"),
                          ),
                          fixedIcon: true,
                          backgroundColor: Colors.transparent,
                          border: const BorderSide(color: ZupColors.brand),
                          foregroundColor: ZupColors.brand,
                          hoverElevation: 0,
                          icon: Assets.icons.textPage.svg(),
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.bottomRight,
                      child: Padding(
                        padding: const EdgeInsets.all(20),
                        child: ZupIconButton(
                          padding: const EdgeInsets.all(20),
                          icon: Assets.logos.x.svg(height: 20),
                          backgroundColor: ZupColors.gray6,
                          onPressed: () => launchUrl(
                            Uri.parse("https://x.com/zup_protocol"),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      );
    });
  }
}
