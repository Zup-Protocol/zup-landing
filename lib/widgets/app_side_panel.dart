import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zup_landing/gen/assets.gen.dart';
import 'package:zup_ui_kit/buttons/zup_primary_button.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class AppSidePanel extends StatelessWidget {
  const AppSidePanel({super.key});

  static void show(BuildContext context) => showGeneralDialog(
        barrierDismissible: true,
        barrierLabel: "Side Panel",
        context: context,
        transitionDuration: const Duration(milliseconds: 400),
        pageBuilder: (context, animation, secondaryAnimation) {
          return ClipRRect(
            borderRadius: BorderRadius.circular(0),
            child: const Padding(
              padding: EdgeInsets.only(left: 40),
              child: AppSidePanel(),
            ),
          );
        },
        transitionBuilder: (context, animation, secondaryAnimation, child) {
          return FadeTransition(
            opacity: animation,
            child: SlideTransition(
                position: animation.drive(
                  Tween(
                    begin: const Offset(1, 0),
                    end: Offset.zero,
                  ),
                ),
                child: child),
          );
        },
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          spacing: 10,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Align(alignment: Alignment.centerRight, child: CloseButton()),
            ZupPrimaryButton(
              title: "FAQ",
              icon: Assets.icons.questionmarkCircle.svg(height: 17),
              hoverElevation: 0,
              width: double.infinity,
              fixedIcon: true,
              backgroundColor: Colors.transparent,
              foregroundColor: ZupColors.brand,
              onPressed: () => launchUrl(
                Uri.parse(
                    "https://zupprotocol.gitbook.io/documentation/general/faq"),
              ),
            ),
            const SizedBox(width: 40),
            ZupPrimaryButton(
              title: "Docs",
              fixedIcon: true,
              width: double.infinity,
              icon: Assets.icons.textPage.svg(),
              hoverElevation: 0,
              backgroundColor: Colors.transparent,
              foregroundColor: ZupColors.brand,
              onPressed: () => launchUrl(
                  Uri.parse("https://zupprotocol.gitbook.io/documentation")),
            ),
            const SizedBox(width: 40),
            ZupPrimaryButton(
              title: "Newsletter",
              width: double.infinity,
              fixedIcon: true,
              icon: Assets.icons.bolt.svg(height: 17),
              hoverElevation: 0,
              backgroundColor: Colors.transparent,
              foregroundColor: ZupColors.brand,
              onPressed: () =>
                  launchUrl(Uri.parse("https://zupprotocol.substack.com/")),
            ),
            const SizedBox(width: 40),
            ZupPrimaryButton(
              title: "Contact us",
              fixedIcon: true,
              alignCenter: false,
              width: double.maxFinite,
              icon: Assets.icons.phone.svg(height: 17),
              hoverElevation: 0,
              backgroundColor: Colors.transparent,
              foregroundColor: ZupColors.brand,
              onPressed: () => launchUrl(
                Uri.parse(
                    "https://zupprotocol.gitbook.io/documentation/other/contact-us"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
