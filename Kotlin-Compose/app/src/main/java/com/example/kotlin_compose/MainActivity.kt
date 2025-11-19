package com.example.kotlin_compose

import android.app.Activity
import android.os.Bundle
import android.view.ViewGroup
import android.widget.EditText
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBars
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.layout.windowInsetsTopHeight
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat
import com.example.kotlin_compose.ui.theme.KotlinComposeTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        enableEdgeToEdge()

        setContent {
            SetStatusBarIconsWhite()
            Column(
                modifier = Modifier
                    .fillMaxSize()
            ) {
                Box(modifier = Modifier
                    .fillMaxWidth()
                    .windowInsetsTopHeight(WindowInsets.statusBars)
                    .background(Color(0xFF153d37)))
                Header()
                Spacer(modifier = Modifier.height(24.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.Center
                ) {
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        DiagramImage()
                        ButtonGroup()
                        Spacer(modifier = Modifier.height(24.dp))
                        EmailInputLinearGroup()
                    }
                }
            }
        }

    }
}

@Composable
fun SetStatusBarIconsWhite() {
    val view = LocalView.current
    SideEffect {
        val window = (view.context as Activity).window
        WindowCompat.setDecorFitsSystemWindows(window, false)
        WindowInsetsControllerCompat(window, window.decorView).isAppearanceLightStatusBars = false
    }
}


@Composable
fun Header(){
    Box(
        modifier = Modifier.fillMaxWidth()
            .background(Color(0xFF2A7E72))
            .height(56.dp),
        contentAlignment = Alignment.Center
    ) {
       Text(
           text = "Kotlin and Compose",
           fontSize = 20.sp,
           color = Color.White
       )
    }
}

@Composable
fun AppCompatStyledButton(buttonText: String) {
    Button(
        onClick = {},
        modifier = Modifier
            .wrapContentSize()
            .padding(horizontal = 16.dp, vertical = 8.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = Color(0xFFE0E0E0),
            contentColor = Color.Black
        ),
        shape = RoundedCornerShape(4.dp)
    ) {
        Text(buttonText)
    }
}

@Composable
fun DiagramImage() {
    Image(
        painter = painterResource(R.drawable.circleimage),
        contentDescription = "diagram",
        modifier = Modifier
            .fillMaxWidth()
            .wrapContentHeight()
            .padding(bottom = 48.dp)
            .size(200.dp)
    )
}

@Composable
fun ButtonGroup() {
    Row(
        modifier = Modifier.wrapContentSize()
    ) {
        // Left column
        Column(
            modifier = Modifier.wrapContentSize()
        ) {
            AppCompatStyledButton("Button 1")
            AppCompatStyledButton("Button 2")
        }

        // Right column
        Column(
            modifier = Modifier.wrapContentSize()
        ) {
            AppCompatStyledButton("Button 3")
            AppCompatStyledButton("Button 4")
        }
    }
}

@Preview (showBackground = true)
@Composable
fun ButtonGroupPreview() {
    KotlinComposeTheme {
        ButtonGroup()
    }
}


@Composable
fun EmailInputLinearGroup() {
    Row (
        modifier = Modifier.wrapContentSize(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        EmailText()
        Spacer(modifier = Modifier.width(16.dp))
        ClassicEditText()
    }
}

@Composable
fun EmailText(modifier: Modifier = Modifier) {
    Text(
        text = "Email: ",
        modifier = modifier
    )
}

@Composable
fun ClassicEditText() {
    AndroidView(
        modifier = Modifier.width(182.dp),
        factory = { context ->
            EditText(context).apply {
                hint = " "
                isSingleLine = true
                backgroundTintList =
                    ContextCompat.getColorStateList(context, android.R.color.holo_red_light)
                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.WRAP_CONTENT,
                    ViewGroup.LayoutParams.WRAP_CONTENT
                )
            }
        }
    )
}

@Preview (showBackground = true)
@Composable
fun EmailInputPreview() {
    KotlinComposeTheme { EmailInputLinearGroup() }
}