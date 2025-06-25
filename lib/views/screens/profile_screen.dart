import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../viewmodels/theme_viewmodel.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final themeViewModel = Provider.of<ThemeViewModel>(context);

    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text('Profile Screen'),
          const SizedBox(height: 20),
          SwitchListTile(
            title: const Text('Dark Mode'),
            value: themeViewModel.isDarkMode,
            onChanged: (value) {
              themeViewModel.toggleTheme();
            },
          ),
        ],
      ),
    );
  }
}
