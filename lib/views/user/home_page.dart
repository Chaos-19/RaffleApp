import 'package:flutter/material.dart';
import 'package:myapp/views/screens/home_screen.dart';
import 'package:provider/provider.dart';
import '../../viewmodels/bottom_nav_viewmodel.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => BottomNavViewModel(),
      child: const HomeView(),
    );
  }
}
