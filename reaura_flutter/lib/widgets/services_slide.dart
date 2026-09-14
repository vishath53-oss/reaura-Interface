import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class ServicesSlide extends StatelessWidget {
  final double parallaxOffset;
  
  const ServicesSlide({super.key, required this.parallaxOffset});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      decoration: const BoxDecoration(
        color: AppTheme.secondaryBackground,
      ),
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Background parallax element
          Transform.translate(
            offset: Offset(0, parallaxOffset * 200),
            child: Opacity(
              opacity: 0.3,
              child: Container(
                width: 800,
                height: 800,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.white,
                ),
              ),
            ),
          ),
          
          // Foreground content parallax
          Transform.translate(
            offset: Offset(0, parallaxOffset * -100),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 40.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Core Capabilities',
                    style: TextStyle(
                      color: AppTheme.primary,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 2,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'Seamless Interaction',
                    style: Theme.of(context).textTheme.displayMedium,
                  ),
                  const SizedBox(height: 48),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _buildServiceCard(
                        context,
                        title: 'Voice Assistant',
                        description: 'Advanced voice recognition mapping spoken commands instantly to device controls.',
                        icon: Icons.mic,
                        color: AppTheme.primary,
                        delayOffset: parallaxOffset * -150,
                      ),
                      const SizedBox(width: 32),
                      _buildServiceCard(
                        context,
                        title: 'Hand Gestures',
                        description: 'Real-time spatial tracking turning physical hand movements into digital actions.',
                        icon: Icons.back_hand,
                        color: AppTheme.pinkAccent,
                        delayOffset: parallaxOffset * -250, // Parallax staggered
                      ),
                      const SizedBox(width: 32),
                      _buildServiceCard(
                        context,
                        title: 'Morse Keyboard',
                        description: 'Intuitive text input through rhythmic Morse code tapping sequences.',
                        icon: Icons.keyboard,
                        color: AppTheme.cyanAccent,
                        delayOffset: parallaxOffset * -350, // Parallax staggered
                      ),
                    ],
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildServiceCard(BuildContext context, {required String title, required String description, required IconData icon, required Color color, required double delayOffset}) {
    return Expanded(
      child: Transform.translate(
        offset: Offset(0, delayOffset),
        child: Container(
          padding: const EdgeInsets.all(32),
          decoration: BoxDecoration(
            color: AppTheme.cardColor,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: AppTheme.borderLight),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.05),
                blurRadius: 20,
                offset: const Offset(0, 10),
              )
            ]
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: color.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Icon(icon, color: color, size: 32),
              ),
              const SizedBox(height: 24),
              Text(
                title,
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 12),
              Text(
                description,
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
