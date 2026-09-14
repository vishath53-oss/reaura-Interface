import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Global Color Palette
  static const Color primary = Color(0xFF6B4EE6); // #6B4EE6
  static const Color purpleAccent = Color(0xFFA855F7); // #A855F7
  static const Color pinkAccent = Color(0xFFEC4899); // #EC4899
  static const Color cyanAccent = Color(0xFF06B6D4); // #06B6D4

  static const Color backgroundLight = Color(0xFFE8F2FF); // Light Blue
  static const Color secondaryBackground = Color(0xFFEDE5FF); // Soft Lavender
  static const Color cardColor = Colors.white;

  static const Color mainHeading = Color(0xFF3B1E54); // Dark Plum
  static const Color bodyText = Color(0xFF5A4B75); // Dark Purple/Gray
  static const Color borderLight = Color(0xFFE5DDF5);

  static ThemeData get lightTheme {
    return ThemeData(
      brightness: Brightness.light,
      primaryColor: primary,
      scaffoldBackgroundColor: backgroundLight,
      cardColor: cardColor,
      textTheme: GoogleFonts.interTextTheme().copyWith(
        displayLarge: GoogleFonts.inter(
          color: mainHeading,
          fontWeight: FontWeight.w800,
          fontSize: 48,
        ),
        displayMedium: GoogleFonts.inter(
          color: mainHeading,
          fontWeight: FontWeight.w800,
          fontSize: 40,
        ),
        titleLarge: GoogleFonts.inter(
          color: mainHeading,
          fontWeight: FontWeight.bold,
          fontSize: 24,
        ),
        titleMedium: GoogleFonts.inter(
          color: mainHeading,
          fontWeight: FontWeight.bold,
          fontSize: 20,
        ),
        bodyLarge: GoogleFonts.inter(
          color: bodyText,
          fontSize: 18,
          height: 1.6,
        ),
        bodyMedium: GoogleFonts.inter(
          color: bodyText,
          fontSize: 16,
          height: 1.6,
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: primary, // fallback
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(30),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
          textStyle: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
        ),
      ),
    );
  }
}
