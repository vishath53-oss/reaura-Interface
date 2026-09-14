import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class HeroSlide extends StatelessWidget {
  final double parallaxOffset;
  
  const HeroSlide({super.key, required this.parallaxOffset});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      decoration: const BoxDecoration(
        color: AppTheme.backgroundLight,
      ),
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Background parallax element
          Transform.translate(
            offset: Offset(parallaxOffset * -300, parallaxOffset * 500),
            child: Opacity(
              opacity: 0.5,
              child: Container(
                width: 600,
                height: 600,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: AppTheme.primary.withOpacity(0.1),
                ),
              ),
            ),
          ),
          Transform.translate(
            offset: Offset(parallaxOffset * 300, parallaxOffset * -400),
            child: Opacity(
              opacity: 0.5,
              child: Container(
                width: 400,
                height: 400,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: AppTheme.purpleAccent.withOpacity(0.1),
                ),
              ),
            ),
          ),
          
          // Foreground content parallax
          Transform.translate(
            offset: Offset(0, parallaxOffset * -200),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 40.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Reaura AirMouse',
                          style: Theme.of(context).textTheme.displayLarge,
                        ),
                        const SizedBox(height: 16),
                        Text(
                          'Advanced Agentic Coding Meets Universal Accessibility.',
                          style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            color: AppTheme.purpleAccent,
                          ),
                        ),
                        const SizedBox(height: 24),
                        Text(
                          'A truly frictionless experience using voice, hand gestures, and Morse input to completely replace the traditional mouse and keyboard.',
                          style: Theme.of(context).textTheme.bodyLarge,
                        ),
                        const SizedBox(height: 40),
                        Row(
                          children: [
                            ElevatedButton(
                              onPressed: () {},
                              style: ElevatedButton.styleFrom(
                                backgroundColor: AppTheme.primary,
                                padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 20),
                              ),
                              child: const Text('Discover Solutions', style: TextStyle(fontSize: 18)),
                            ),
                            const SizedBox(width: 16),
                            OutlinedButton(
                              onPressed: () {},
                              style: OutlinedButton.styleFrom(
                                foregroundColor: AppTheme.mainHeading,
                                side: const BorderSide(color: AppTheme.borderLight, width: 2),
                                padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 20),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                              ),
                              child: const Text('Watch Demo', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                            ),
                          ],
                        )
                      ],
                    ),
                  ),
                  const SizedBox(width: 40),
                  // Parallax Image
                  Expanded(
                    child: Transform.translate(
                      offset: Offset(0, parallaxOffset * 400), // Moves significantly against scroll
                      child: Image.asset(
                        'assets/hero.png',
                        fit: BoxFit.contain,
                      ),
                    ),
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
