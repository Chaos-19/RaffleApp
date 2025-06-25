import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'viewmodels/theme_viewmodel.dart';
import 'views/user/home_page.dart';
import 'core/themes/app_theme.dart';

void main() {
  runApp(const RaffleApp());
}

class RaffleApp extends StatelessWidget {
  const RaffleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => ThemeViewModel(),
      child: Consumer<ThemeViewModel>(
        builder: (context, themeViewModel, child) {
          return MaterialApp(
            title: 'Flutter Bottom Navigation',
            theme: AppTheme.lightTheme,
            darkTheme: AppTheme.darkTheme,
            themeMode: themeViewModel.isDarkMode ? ThemeMode.dark : ThemeMode.light,
            home: const HomePage(),
          );
        },
      ),
    );
  }
}