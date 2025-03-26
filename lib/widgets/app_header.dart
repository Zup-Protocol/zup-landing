import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zup_landing/gen/assets.gen.dart';
import 'package:zup_landing/widgets/app_side_panel.dart';
import 'package:zup_ui_kit/buttons/buttons.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class AppHeader extends StatelessWidget {
  const AppHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) => SizedBox(
        height: 80,
        child: Stack(
          children: [
            ClipRRect(
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20),
                child: Container(
                  color: Colors.white.withOpacity(0.8),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 20, right: 10),
              child: Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    if (constraints.maxWidth > 300)
                      Flexible(
                        flex: constraints.maxWidth > 850 ? 1 : 0,
                        child: Align(
                            alignment: Alignment.centerLeft,
                            child: Assets.logos.zup.svg(height: 28)),
                      ),
                    if (constraints.maxWidth > 800) ...[
                      Flexible(
                        flex: 3,
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            ZupPrimaryButton(
                              title: "FAQ",
                              icon: Assets.icons.questionmarkCircle
                                  .svg(height: 17),
                              hoverElevation: 0,
                              backgroundColor: Colors.transparent,
                              foregroundColor: ZupColors.brand,
                              onPressed: () => launchUrl(Uri.parse(
                                  "https://zupprotocol.gitbook.io/documentation/general/faq")),
                            ),
                            const SizedBox(width: 40),
                            ZupPrimaryButton(
                              title: "Docs",
                              icon: Assets.icons.textPage.svg(),
                              hoverElevation: 0,
                              backgroundColor: Colors.transparent,
                              foregroundColor: ZupColors.brand,
                              onPressed: () => launchUrl(
                                Uri.parse(
                                  "https://zupprotocol.gitbook.io/documentation",
                                ),
                              ),
                            ),
                            const SizedBox(width: 40),
                            ZupPrimaryButton(
                              title: "Newsletter",
                              icon: Assets.icons.bolt.svg(height: 17),
                              hoverElevation: 0,
                              backgroundColor: Colors.transparent,
                              foregroundColor: ZupColors.brand,
                              onPressed: () => launchUrl(
                                Uri.parse("https://zupprotocol.substack.com/"),
                              ),
                            ),
                            const SizedBox(width: 40),
                            ZupPrimaryButton(
                              title: "Contact us",
                              icon: Assets.icons.phone.svg(height: 17),
                              hoverElevation: 0,
                              backgroundColor: Colors.transparent,
                              foregroundColor: ZupColors.brand,
                              onPressed: () => launchUrl(Uri.parse(
                                  "https://zupprotocol.gitbook.io/documentation/other/contact-us")),
                            ),
                          ],
                        ),
                      ),
                      Flexible(
                        // flex: 1,
                        child: Align(
                          alignment: Alignment.centerRight,
                          child: ZupPrimaryButton(
                            icon: Assets.icons.arrowRight.svg(height: 12),
                            height: 45,
                            border: const BorderSide(
                                width: 1, color: ZupColors.brand),
                            backgroundColor: Colors.transparent,
                            foregroundColor: ZupColors.brand,
                            title: "Launch App",
                            // fixedIcon: true,
                            onPressed: () {
                              launchUrl(
                                Uri.parse("https://app.zupprotocol.xyz"),
                              );
                            },
                            hoverElevation: 0,
                            isTrailingIcon: true,
                          ),
                        ),
                      ),
                    ] else ...[
                      const ZupPrimaryButton(
                        height: 45,
                        // border:
                        //     const BorderSide(width: 1, color: ZupColors.brand),
                        backgroundColor: Colors.transparent,
                        foregroundColor: ZupColors.brand,
                        title: "Launch App (Soon)",
                        fixedIcon: true,
                        onPressed: null,
                        //  () {
                        //   launchUrl(
                        //     Uri.parse("https://app.zupprotocol.xyz"),
                        //   );
                        // },
                        hoverElevation: 0,
                        isTrailingIcon: true,
                      ),
                      ZupIconButton(
                        icon: Assets.icons.line3Horizontal.svg(height: 12),
                        onPressed: () => AppSidePanel.show(context),
                        padding: const EdgeInsets.all(16),
                        backgroundColor: Colors.transparent,
                      )
                    ]
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
